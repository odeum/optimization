## YARN

#### yarn add <package...>
This will install one or more packages in your dependencies.

#### yarn add <package...> [--dev/-D]
Using --dev or -D will install one or more packages in your devDependencies.

#### yarn add <package...> [--peer/-P]
Using --peer or -P will install one or more packages in your peerDependencies.

#### yarn add <package...> [--optional/-O]
Using --optional or -O will install one or more packages in your optionalDependencies.

#### yarn add <package...> [--exact/-E]
Using --exact or -E installs the packages as exact versions. The default is to use the most recent release with the same major version. For example, yarn add foo@1.2.3 would accept version 1.9.1, but yarn add foo@1.2.3 --exact would only accept version 1.2.3.

## NPM => YARN Cheat Sheet

#### yarn = npm install 
Install is the default behavior for yarn

#### yarn add odeum-ui = npm install odeum-ui --save
The odeum-ui package is saved to your package.json immediately.

#### yarn remove odeum-ui = npm uninstall odeum-ui --save
Adding and removing from package.json is default in Yarn.

#### yarn add odeum-ui --dev = npm install odeum-ui --save-dev
--dev or -D will install one or more packages in your devDependencies

#### yarn upgrade = npm update --save
Great call on upgrade vs update, since that is exactly what it is doing! Version number moves, upgrade is happening!

#### yarn add odeum-ui = npm install odeum-ui@latest --save 
Installs latest version of your package

#### yarn global add odeum-ui = npm install odeum-ui --global
As always, use global flag (-g) with care.

