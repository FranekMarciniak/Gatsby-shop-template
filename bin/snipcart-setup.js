const ast = require("abstract-syntax-tree")
const fs = require("fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

function askValue(question) {
  return new Promise(resolve => {
    readline.question(`\n${question}\n> `, function (answer) {
      resolve(answer)
    })
  })
}

async function confirm(question) {
  var value = await askValue(`${question} (y)es / (n)o`)
  return !!value.match(/^y/)
}

function openUrl(url) {
  var start =
    process.platform == "darwin"
      ? "open"
      : process.platform == "win32"
      ? "start"
      : "xdg-open"
  require("child_process").exec(start + " " + url)
}

function setPluginConfigOption(optionsNode, name, value){
  const result = ast.find(optionsNode, `Property[key.name="${name}"]`)
  if(result.length > 0){
    result[0].value.value = value
  }
  else{
    optionsNode.value.properties.push(
      {
        type: "Property",
        key: { type: "Identifier", name },
        value: { type: "Literal", value },
        kind: "init",
        computed: false,
        method: false,
        shorthand: false
      }
    )
  }
}

async function run() {
  if (!await confirm("You will need a Snipcart account to go further.\nDo you already have a Snipcart account?")) {
    if(!await confirm("Do you want to create a Snipcart account now?\nYou will be redirected")){
        console.log("Run this tool again if tou change your mind!")
    }
    openUrl("https://app.snipcart.com/account/register")
  }

  const filePath = "./gatsby-config.js"
  const configTree = ast.parse(fs.readFileSync(filePath,"utf8"));

  const optionsNode = ast.find(configTree, 'Property[key.name="plugins"] Property[key.name="resolve"][value.value="gatsby-plugin-snipcart-advanced"] ~ Property[key.name="options"]')

  const publicApiKey = await askValue("What is your Snipcart account's PUBLIC API KEY? You can find it here: https://app.snipcart.com/dashboard/account/credentials")
  const defaultLang = await askValue("What is the default language of your site?\nFor example 'en'")
  const currency = await askValue("What is the currency of your store?\nFor example 'usd'")
  
  ast.replace(configTree, node => {
    if(node === optionsNode[0]){
      setPluginConfigOption(node, "publicApiKey", publicApiKey)
      setPluginConfigOption(node, "defaultLang", defaultLang)
      setPluginConfigOption(node, "currency", currency)
    }
    return node
  })

  fs.writeFileSync(filePath, ast.generate(configTree))

  console.log("\n\nPlugin config has been updated")
  
  console.log("\n\nYou're all done! You can now run `gatsby develop` to see your new site in action.")

  readline.close()
}

run()