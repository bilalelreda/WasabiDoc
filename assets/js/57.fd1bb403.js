(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{268:function(a,t,e){"use strict";e.r(t);var s=e(0),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"wasabi-setup-in-virtual-machines"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wasabi-setup-in-virtual-machines"}},[a._v("#")]),a._v(" Wasabi Setup in Virtual Machines")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#qubes"}},[a._v("Qubes")]),e("ul",[e("li",[e("a",{attrs:{href:"#generate-template-vm"}},[a._v("Generate Template VM")])]),e("li",[e("a",{attrs:{href:"#install-dependencies"}},[a._v("Install Dependencies")])]),e("li",[e("a",{attrs:{href:"#generate-app-vm"}},[a._v("Generate App VM")])]),e("li",[e("a",{attrs:{href:"#compile-and-run-wasabi"}},[a._v("Compile and Run Wasabi")])]),e("li",[e("a",{attrs:{href:"#install-package-in-app-vm"}},[a._v("Install Package in App VM")])])])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"qubes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qubes"}},[a._v("#")]),a._v(" Qubes")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.qubes-os.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Qubes"),e("OutboundLink")],1),a._v(" is a free and open-source security-oriented operating system meant for single-user desktop computing.\nQubes OS leverages xen-based virtualization to allow for the creation and management of isolated virtual machines (VMs) called qubes.\nThis is valuable for users of high security software like Wasabi Wallet, and especially useful for testers of cutting edge developer branches.\nThere is a separation of the virtual machines running Wasabi on testnet, and those running on mainnet with valuable private keys.\nIf a reviewer compiles a malicious developer branch, then his mainnet private keys are secure in a different qube.")]),a._v(" "),e("p",[a._v("This is a step-by-step guide on how to properly compile Wasabi Wallet from source in independent qubes.\nFor tutorials on how to "),e("a",{attrs:{href:"https://www.qubes-os.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[a._v("download"),e("OutboundLink")],1),a._v(" and "),e("a",{attrs:{href:"https://www.qubes-os.org/doc/installation-guide/",target:"_blank",rel:"noopener noreferrer"}},[a._v("install"),e("OutboundLink")],1),a._v(" Qubes, please see their exhaustive documentation.")]),a._v(" "),e("h3",{attrs:{id:"generate-template-vm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generate-template-vm"}},[a._v("#")]),a._v(" Generate Template VM")]),a._v(" "),e("p",[a._v("The dependencies to "),e("router-link",{attrs:{to:"/using-wasabi/BuildSource.html"}},[a._v("compile Wasabi from source")]),a._v(" will be downloaded and installed in a new template VM, which is generated by cloning the Debian template from the "),e("code",[a._v("dom0")]),a._v(" terminal.")],1),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@dom0 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ qvm-clone template-debian-10 template-wasabi\n")])])]),e("h3",{attrs:{id:"install-dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies"}},[a._v("#")]),a._v(" Install Dependencies")]),a._v(" "),e("p",[a._v("Start the gnome-terminal of "),e("code",[a._v("template-wasabi")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@dom0 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ qvm-run -a template-wasabi gnome-terminal\n")])])]),e("p",[a._v("Update the "),e("code",[a._v("template-wasabi")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@template-wasabi ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@template-wasabi ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" upgrade\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@template-wasabi ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" dist-upgrade\n")])])]),e("p",[a._v("Install "),e("a",{attrs:{href:"https://www.microsoft.com/net/download",target:"_blank",rel:"noopener noreferrer"}},[a._v(".NET Core 3.1 SDK"),e("OutboundLink")],1),a._v(' for "Building Apps" in '),e("code",[a._v("template-wasabi")]),a._v(".")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("Optional for privacy")]),a._v(" "),e("p",[a._v("You can disable .NET's telemetry, which is sending some usage information to Microsoft:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@template-wasabi ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DOTNET_CLI_TELEMETRY_OPTOUT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])])]),a._v(" "),e("p",[a._v("If you need to update .NET Core, then do it in this VM.\nNow shut down "),e("code",[a._v("template-wasabi")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@dom0 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ qvm-shutdown template-wasabi\n")])])]),e("h3",{attrs:{id:"generate-app-vm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generate-app-vm"}},[a._v("#")]),a._v(" Generate App VM")]),a._v(" "),e("p",[a._v("Create a new App VM "),e("code",[a._v("source-wasabi")]),a._v(" which is based on "),e("code",[a._v("template-wasabi")]),a._v(".\nThis qube will be used to download, compile and run the Wasabi source code.\nThis way you can create multiple App VMs for different testing purposes.\nAll these App VMs will be updated when you update "),e("code",[a._v("template-wasabi")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@dom0 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ qvm-create source-wasabi --template template-wasabi --label red\n")])])]),e("h3",{attrs:{id:"compile-and-run-wasabi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compile-and-run-wasabi"}},[a._v("#")]),a._v(" Compile and Run Wasabi")]),a._v(" "),e("p",[a._v("Start the gnome-terminal of "),e("code",[a._v("source-wasabi")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@dom0 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ qvm-run -a source-wasabi gnome-terminal\n")])])]),e("p",[a._v("Clone & build Wasabi")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@source-wasabi ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/zkSNACKs/WalletWasabi.git\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@source-wasabi ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" WalletWasabi/WalletWasabi.Gui\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@source-wasabi ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ dotnet build\n")])])]),e("p",[a._v("Add the development branches to your git.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@source-wasabi ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" nopara73 https://github.com/nopara73/WalletWasabi\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@source-wasabi ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" fetch nopara73\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@source-wasabi ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("development branch"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("Pull the latest commits and compile from source.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@source-wasabi ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@source-wasabi ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ dotnet run\n")])])]),e("h3",{attrs:{id:"install-package-in-app-vm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-package-in-app-vm"}},[a._v("#")]),a._v(" Install Package in App VM")]),a._v(" "),e("p",[a._v("Alternatively, you can also install the package in a new App VM, this is a stable version suitable to use on mainnet and is separated from the development App VM.\nThere are no additional dependencies required, so the App VM can be based on "),e("code",[a._v("template-debian-10")]),a._v(" directly.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@dom0 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ qvm-create package-wasabi --template template-debian-10 --label red\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@dom0 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ qvm-run -a package-wasabi gnome-terminal\n")])])]),e("p",[e("router-link",{attrs:{to:"/using-wasabi/InstallPackage.html#debian-and-ubuntu"}},[a._v("Download, verify and install")]),a._v(" the latest "),e("code",[a._v("Wasabi-1.1.10.2.deb")]),a._v(" package in "),e("code",[a._v("package-wasabi")]),a._v(", then start Wasabi.")],1),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("user@package-wasabi ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ wassabee\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);