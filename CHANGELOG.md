# Changelog

All notable changes to this project will be documented in this file.

## [0.19.0](https://github.com/owen-grady/uds-core-slim-dev/compare/v0.18.0...v0.19.0) (2024-06-05)


### Features

* add authservice to uds-core ([#153](https://github.com/owen-grady/uds-core-slim-dev/issues/153)) ([a2604d2](https://github.com/owen-grady/uds-core-slim-dev/commit/a2604d2a4642fea4305b7d7165557ff060c2ffd9))
* Add istio and preliminary ci ([#3](https://github.com/owen-grady/uds-core-slim-dev/issues/3)) ([5163e25](https://github.com/owen-grady/uds-core-slim-dev/commit/5163e25d11f589585a9b4b468a4311480c62ca47))
* add Istio VirtualService Requestmatch to UDS Operator ([#129](https://github.com/owen-grady/uds-core-slim-dev/issues/129)) ([6a5a78e](https://github.com/owen-grady/uds-core-slim-dev/commit/6a5a78e9c74fe4dd50bc9fb43b40258c97a1c421))
* add keycloak ([#147](https://github.com/owen-grady/uds-core-slim-dev/issues/147)) ([02722ea](https://github.com/owen-grady/uds-core-slim-dev/commit/02722ea6694dcd4e1c8469caf18eec56c409d978))
* add metrics-server ([#35](https://github.com/owen-grady/uds-core-slim-dev/issues/35)) ([e49e682](https://github.com/owen-grady/uds-core-slim-dev/commit/e49e6826d95b3923aa5e8c74e001021c9fc47ba1))
* add monitoring and logging ([#33](https://github.com/owen-grady/uds-core-slim-dev/issues/33)) ([e7f771c](https://github.com/owen-grady/uds-core-slim-dev/commit/e7f771ce813359d7c6b17d0696d46d3ab7c6edac))
* add nightly testing eks ([#250](https://github.com/owen-grady/uds-core-slim-dev/issues/250)) ([6cd3194](https://github.com/owen-grady/uds-core-slim-dev/commit/6cd3194362e9d606430d6bbf8a57bc553ab7527d))
* add pepr capability for istio + jobs ([#12](https://github.com/owen-grady/uds-core-slim-dev/issues/12)) ([d690f5e](https://github.com/owen-grady/uds-core-slim-dev/commit/d690f5e251386d980103a0581306aa5761a9491d))
* add policy exemptions ([#165](https://github.com/owen-grady/uds-core-slim-dev/issues/165)) ([64a35af](https://github.com/owen-grady/uds-core-slim-dev/commit/64a35afbea50485dfbd76b39f6645d7e9b44a284))
* add prometheus-stack (monitoring) capability ([#2](https://github.com/owen-grady/uds-core-slim-dev/issues/2)) ([c57fa5f](https://github.com/owen-grady/uds-core-slim-dev/commit/c57fa5f277136291c30dc922cd438be2faf59703))
* add UDS Operator and consolidate UDS Policies ([#66](https://github.com/owen-grady/uds-core-slim-dev/issues/66)) ([26a8b9e](https://github.com/owen-grady/uds-core-slim-dev/commit/26a8b9ed1d23770cf0ef7ca2ac28ec8dcaf156c7))
* add velero package ([#210](https://github.com/owen-grady/uds-core-slim-dev/issues/210)) ([1fed35d](https://github.com/owen-grady/uds-core-slim-dev/commit/1fed35d8d51047e3bb33697c61b418c72e64deef))
* add Zarf Flavors to support Iron Bank & upstream images ([#63](https://github.com/owen-grady/uds-core-slim-dev/issues/63)) ([310ca71](https://github.com/owen-grady/uds-core-slim-dev/commit/310ca71fca46aaac5e2252ff12318aca8a825473))
* added initial oscal files ([#145](https://github.com/owen-grady/uds-core-slim-dev/issues/145)) ([f250edb](https://github.com/owen-grady/uds-core-slim-dev/commit/f250edba588b8c638e837c52f4d3b6fcb59f61c0))
* embed tls certs in istio package ([#32](https://github.com/owen-grady/uds-core-slim-dev/issues/32)) ([82c36d1](https://github.com/owen-grady/uds-core-slim-dev/commit/82c36d1a352cd033c53dc88c66af65ab537ce836))
* expose tls certs as UDS bundle variables ([#48](https://github.com/owen-grady/uds-core-slim-dev/issues/48)) ([041327f](https://github.com/owen-grady/uds-core-slim-dev/commit/041327f2c2646ba88bf68d5c6356228b9a648a73))
* introduce advancedHTTP for expose field & change podLabels to selector ([#154](https://github.com/owen-grady/uds-core-slim-dev/issues/154)) ([6f90b58](https://github.com/owen-grady/uds-core-slim-dev/commit/6f90b58191382cd5aa6f7445e4493ddb8ac3f437))
* introduce Pepr common policies ([#50](https://github.com/owen-grady/uds-core-slim-dev/issues/50)) ([1e76f06](https://github.com/owen-grady/uds-core-slim-dev/commit/1e76f0642b6ef9ab31dae312c0ff777a131814d2))
* introduce sso secret templating ([#276](https://github.com/owen-grady/uds-core-slim-dev/issues/276)) ([d615c19](https://github.com/owen-grady/uds-core-slim-dev/commit/d615c197699562ecea6d564a61c35c1d94bcd208))
* **operator:** add events and improve lifecycle ops ([#245](https://github.com/owen-grady/uds-core-slim-dev/issues/245)) ([4c64c72](https://github.com/owen-grady/uds-core-slim-dev/commit/4c64c722fc53a6b97875be8b83a2a60788b4d4e9))
* release-please integration ([#25](https://github.com/owen-grady/uds-core-slim-dev/issues/25)) ([32eadb0](https://github.com/owen-grady/uds-core-slim-dev/commit/32eadb0ec892ef858ab1e7d9884e24e20bce714c))
* switch loki to simple scalable ([#156](https://github.com/owen-grady/uds-core-slim-dev/issues/156)) ([790b116](https://github.com/owen-grady/uds-core-slim-dev/commit/790b1164f6d74870214685a13fbbadee641f4d4d))
* update security policy to use provided user, group, and fsgroup ([#82](https://github.com/owen-grady/uds-core-slim-dev/issues/82)) ([212f299](https://github.com/owen-grady/uds-core-slim-dev/commit/212f299b1764c19f1d9ca9f2b860bc269e64fbda))


### Bug Fixes

* add keycloak to dev bundle and rename ([#262](https://github.com/owen-grady/uds-core-slim-dev/issues/262)) ([385baef](https://github.com/owen-grady/uds-core-slim-dev/commit/385baefbca54b95b6e5c89c8e221a11f2f01f3f4))
* add kubeapi egress for neuvector enforcer ([#291](https://github.com/owen-grady/uds-core-slim-dev/issues/291)) ([2c6f880](https://github.com/owen-grady/uds-core-slim-dev/commit/2c6f880526b9f10ca6c8ce46c9837cecb652da1c))
* add test for disallow selinux options and handle checking for us… ([#96](https://github.com/owen-grady/uds-core-slim-dev/issues/96)) ([8a94879](https://github.com/owen-grady/uds-core-slim-dev/commit/8a948798652ed002f47387540692bf3d0bd68351))
* arm64 packages / bundles creation ([#264](https://github.com/owen-grady/uds-core-slim-dev/issues/264)) ([b1d26e4](https://github.com/owen-grady/uds-core-slim-dev/commit/b1d26e469ce3b0a27208fe9c17e3d31ea979bc42))
* basic validations for packages ([#208](https://github.com/owen-grady/uds-core-slim-dev/issues/208)) ([bec99ef](https://github.com/owen-grady/uds-core-slim-dev/commit/bec99efdcb5d24891fa84ff0ba671859462b3445))
* change pepr error policy to reject ([#99](https://github.com/owen-grady/uds-core-slim-dev/issues/99)) ([b39dfdd](https://github.com/owen-grady/uds-core-slim-dev/commit/b39dfddb97ae7a995a5839b169c95e173a103db4))
* complete incomplete deploy task ([#21](https://github.com/owen-grady/uds-core-slim-dev/issues/21)) ([ba7eb01](https://github.com/owen-grady/uds-core-slim-dev/commit/ba7eb01aeab17740fc1d67b7b419838f2eca3e22))
* hotfix for publishing workflows ([#217](https://github.com/owen-grady/uds-core-slim-dev/issues/217)) ([bd1b51c](https://github.com/owen-grady/uds-core-slim-dev/commit/bd1b51cd72dd4c3e73bcf6b83fadc3b8c64a9936))
* keycloak volume permissions, UI update ([#223](https://github.com/owen-grady/uds-core-slim-dev/issues/223)) ([4a108bf](https://github.com/owen-grady/uds-core-slim-dev/commit/4a108bf8dd008489a9389d04d27764a5cb31fcaf))
* **keycloak:** add missing postgres host and port secret keys ([#224](https://github.com/owen-grady/uds-core-slim-dev/issues/224)) ([c957848](https://github.com/owen-grady/uds-core-slim-dev/commit/c9578489f1f419d8872d712456c3936ca18c47f2))
* **keycloak:** only use PVC for devMode ([#241](https://github.com/owen-grady/uds-core-slim-dev/issues/241)) ([b13e1b0](https://github.com/owen-grady/uds-core-slim-dev/commit/b13e1b0326fdf11cceaeca8431636dac18403eb6))
* kubeapi netpol generation now also includes the ip from the kubernetes service ([#219](https://github.com/owen-grady/uds-core-slim-dev/issues/219)) ([6e250f9](https://github.com/owen-grady/uds-core-slim-dev/commit/6e250f9350e07d292fad0cd3525da4df4bc83a30))
* loki local storage ([#84](https://github.com/owen-grady/uds-core-slim-dev/issues/84)) ([32f478f](https://github.com/owen-grady/uds-core-slim-dev/commit/32f478f9a4f6788d93bbcaee0ee1b4527fbf0c15))
* metrics-server mTLS fix ([#44](https://github.com/owen-grady/uds-core-slim-dev/issues/44)) ([f2e5eb9](https://github.com/owen-grady/uds-core-slim-dev/commit/f2e5eb9fca2812e59cab1d3f1343cdbd5f38999c))
* network policy to allow metrics-server ingress ([#148](https://github.com/owen-grady/uds-core-slim-dev/issues/148)) ([e7b206e](https://github.com/owen-grady/uds-core-slim-dev/commit/e7b206ed808bb2927ef731a2b8d210ab2bc3bea1))
* non-vendored zarf command refs ([#157](https://github.com/owen-grady/uds-core-slim-dev/issues/157)) ([f6f637a](https://github.com/owen-grady/uds-core-slim-dev/commit/f6f637a456f826248cf25bc9d0338fed285f9036))
* ocsp lookup egress policy ([#255](https://github.com/owen-grady/uds-core-slim-dev/issues/255)) ([0dc5289](https://github.com/owen-grady/uds-core-slim-dev/commit/0dc52890e43615fcde88606c1a65b041d0c5fb05))
* pepr ironbank renovate update ([#299](https://github.com/owen-grady/uds-core-slim-dev/issues/299)) ([47b2632](https://github.com/owen-grady/uds-core-slim-dev/commit/47b26328c5e5f997b1f405f41278e84b022bb84c))
* registration robot check form id ([#269](https://github.com/owen-grady/uds-core-slim-dev/issues/269)) ([99f2059](https://github.com/owen-grady/uds-core-slim-dev/commit/99f205952b25b45074b068b6597c0b6db8739fa2))
* release workflow k3d image ([#316](https://github.com/owen-grady/uds-core-slim-dev/issues/316)) ([9ad3188](https://github.com/owen-grady/uds-core-slim-dev/commit/9ad318890562d4d077538695c5c03a03e18c40f2))
* remove loki gateway anti-affinity ([#111](https://github.com/owen-grady/uds-core-slim-dev/issues/111)) ([0bbde00](https://github.com/owen-grady/uds-core-slim-dev/commit/0bbde007d83550bbb440ef0ad241ef9df8614d24))
* remove spec from secret yaml ([#226](https://github.com/owen-grady/uds-core-slim-dev/issues/226)) ([fc97f8b](https://github.com/owen-grady/uds-core-slim-dev/commit/fc97f8ba04f496ff28ab31430b201a107975cd64))
* resolve istio job termination container status logic issue ([#55](https://github.com/owen-grady/uds-core-slim-dev/issues/55)) ([e088b78](https://github.com/owen-grady/uds-core-slim-dev/commit/e088b78036d01eea8f0e508e759004a1a73319f8))
* revert "chore: support deselection of metrics-server" ([#196](https://github.com/owen-grady/uds-core-slim-dev/issues/196)) ([f802f9d](https://github.com/owen-grady/uds-core-slim-dev/commit/f802f9d34592c507268391856cf09c109f1c6d98))
* sticky sessions for keycloak in ha ([#281](https://github.com/owen-grady/uds-core-slim-dev/issues/281)) ([7744ee2](https://github.com/owen-grady/uds-core-slim-dev/commit/7744ee22d28442fc3730f91d895aebbaabfc0237))
* unwanted exemption deletions ([#290](https://github.com/owen-grady/uds-core-slim-dev/issues/290)) ([f339186](https://github.com/owen-grady/uds-core-slim-dev/commit/f339186f5023ff40e4715b9ef4bd7545fdf8e98a))
* update missing flavor create inputs in publish step ([#118](https://github.com/owen-grady/uds-core-slim-dev/issues/118)) ([54142fd](https://github.com/owen-grady/uds-core-slim-dev/commit/54142fd2fcb2e37746e43b56c1de92631e57c4d2))
* validating/mutating webhook networkpolicies and mtls ([#192](https://github.com/owen-grady/uds-core-slim-dev/issues/192)) ([1c95b17](https://github.com/owen-grady/uds-core-slim-dev/commit/1c95b17a230d5e72aa22542428e0c3f169fd1086))
* valueFrom in KeyCloak statefulset.yaml ([#229](https://github.com/owen-grady/uds-core-slim-dev/issues/229)) ([1936131](https://github.com/owen-grady/uds-core-slim-dev/commit/1936131feadb845fecf96ed8b044b35448677ba3))
* wait on istio proxies ([#87](https://github.com/owen-grady/uds-core-slim-dev/issues/87)) ([17d42ed](https://github.com/owen-grady/uds-core-slim-dev/commit/17d42edc682be7a41c68c8f76c76ecb5b62a93a7))


### Miscellaneous

* add commit lint workflow ([#19](https://github.com/owen-grady/uds-core-slim-dev/issues/19)) ([6bdd331](https://github.com/owen-grady/uds-core-slim-dev/commit/6bdd331b6c5e51ce748e1c552e74b3153919f195))
* add debug output to release workflow ([#285](https://github.com/owen-grady/uds-core-slim-dev/issues/285)) ([c454ce4](https://github.com/owen-grady/uds-core-slim-dev/commit/c454ce4d3f0cbfe12d7cfb5f39b6181a2f9b06b8))
* add flavor to pepr build task ([#238](https://github.com/owen-grady/uds-core-slim-dev/issues/238)) ([b0c6b83](https://github.com/owen-grady/uds-core-slim-dev/commit/b0c6b83d4fbf016ee10c98a345178d9c05fb7016))
* add minio deploy time bundle variable override definitions ([#58](https://github.com/owen-grady/uds-core-slim-dev/issues/58)) ([21a5159](https://github.com/owen-grady/uds-core-slim-dev/commit/21a5159ecec13749540a0058884be8165bf0432a))
* add security.md ([#189](https://github.com/owen-grady/uds-core-slim-dev/issues/189)) ([4859a18](https://github.com/owen-grady/uds-core-slim-dev/commit/4859a1888bb83dcfeaf87e2c54b7f36aea664c5a))
* adding unit test for registerExemptions() ([#105](https://github.com/owen-grady/uds-core-slim-dev/issues/105)) ([2229fce](https://github.com/owen-grady/uds-core-slim-dev/commit/2229fcec60850f55b75dc5f912dddce919857763))
* align mutation annotations ([#268](https://github.com/owen-grady/uds-core-slim-dev/issues/268)) ([5cbdf95](https://github.com/owen-grady/uds-core-slim-dev/commit/5cbdf95912292e6368447b1a02996547139fe9a0))
* annotate mutations in policies ([#236](https://github.com/owen-grady/uds-core-slim-dev/issues/236)) ([13cb1a3](https://github.com/owen-grady/uds-core-slim-dev/commit/13cb1a3bfc95aa5735478b917496311e899443db))
* bump zarf & uds-k3d deps ([#30](https://github.com/owen-grady/uds-core-slim-dev/issues/30)) ([89583d1](https://github.com/owen-grady/uds-core-slim-dev/commit/89583d1c353d525b4ea40d6d46583b037f50442e))
* conform to latest uds bundle schema ([#52](https://github.com/owen-grady/uds-core-slim-dev/issues/52)) ([8606fb2](https://github.com/owen-grady/uds-core-slim-dev/commit/8606fb28ccb97d6a58fe8adf0b16b19fb3618bac))
* dep updates for UDS CLI & Pepr ([#46](https://github.com/owen-grady/uds-core-slim-dev/issues/46)) ([c0ce1cc](https://github.com/owen-grady/uds-core-slim-dev/commit/c0ce1cc63bd89c19ba827d4bcd7f3c0cad0d22ae))
* **deps:** pin dependencies ([#79](https://github.com/owen-grady/uds-core-slim-dev/issues/79)) ([863b8f9](https://github.com/owen-grady/uds-core-slim-dev/commit/863b8f9173df8be4e7069fb4d98b90f1d82af0cd))
* **deps:** update dependency defenseunicorns/uds-common to v0.2.1 ([#205](https://github.com/owen-grady/uds-core-slim-dev/issues/205)) ([ae759f5](https://github.com/owen-grady/uds-core-slim-dev/commit/ae759f50b147ae148fa03f568cb81c3e988a2898))
* **deps:** update dependency defenseunicorns/uds-common to v0.2.2 ([#232](https://github.com/owen-grady/uds-core-slim-dev/issues/232)) ([0e74168](https://github.com/owen-grady/uds-core-slim-dev/commit/0e7416874010d179f12e42183ad698cc36a755b9))
* **deps:** update dependency defenseunicorns/uds-common to v0.3.6 ([#261](https://github.com/owen-grady/uds-core-slim-dev/issues/261)) ([2a795c4](https://github.com/owen-grady/uds-core-slim-dev/commit/2a795c40d3c28b2aa7b046f60570c88ed308e976))
* **deps:** update githubactions ([#179](https://github.com/owen-grady/uds-core-slim-dev/issues/179)) ([68aadc0](https://github.com/owen-grady/uds-core-slim-dev/commit/68aadc00a46d5883df4358690b817010cee9e227))
* **deps:** update githubactions ([#242](https://github.com/owen-grady/uds-core-slim-dev/issues/242)) ([3107fce](https://github.com/owen-grady/uds-core-slim-dev/commit/3107fce8f6d9b85ee06780ae3a7954e26cb29985))
* **deps:** update githubactions to de90cc6 ([#215](https://github.com/owen-grady/uds-core-slim-dev/issues/215)) ([1997710](https://github.com/owen-grady/uds-core-slim-dev/commit/199771064c96379d9995d579a5466b2127c99abe))
* **deps:** update githubactions to ebc4d7e ([#183](https://github.com/owen-grady/uds-core-slim-dev/issues/183)) ([5ebfd42](https://github.com/owen-grady/uds-core-slim-dev/commit/5ebfd42fae3c17a0f53ee52b037aa16c65d442c7))
* **deps:** update githubactions to v19 ([#204](https://github.com/owen-grady/uds-core-slim-dev/issues/204)) ([f165591](https://github.com/owen-grady/uds-core-slim-dev/commit/f165591948449cc1c2ca9bb11dd382247bc58081))
* **deps:** update githubactions to v3 ([#181](https://github.com/owen-grady/uds-core-slim-dev/issues/181)) ([50f1fcb](https://github.com/owen-grady/uds-core-slim-dev/commit/50f1fcb7c73b7a57144846a35f2d62d47e9fa589))
* **deps:** update grafana ([#144](https://github.com/owen-grady/uds-core-slim-dev/issues/144)) ([c7675ca](https://github.com/owen-grady/uds-core-slim-dev/commit/c7675ca8aeaa061a6b683e5f17cc84b5b3c77e15))
* **deps:** update grafana ([#257](https://github.com/owen-grady/uds-core-slim-dev/issues/257)) ([cb063f5](https://github.com/owen-grady/uds-core-slim-dev/commit/cb063f5a5d65ea4edf3306abd515e5472560198c))
* **deps:** update grafana ([#80](https://github.com/owen-grady/uds-core-slim-dev/issues/80)) ([724e0e6](https://github.com/owen-grady/uds-core-slim-dev/commit/724e0e6f20ca44270416528c7fd625da754fe7b6))
* **deps:** update grafana to v10.3.1 ([#132](https://github.com/owen-grady/uds-core-slim-dev/issues/132)) ([9e13c92](https://github.com/owen-grady/uds-core-slim-dev/commit/9e13c92e849197e988836a495a761541f16c7e80))
* **deps:** update grafana to v7.2.5 ([#136](https://github.com/owen-grady/uds-core-slim-dev/issues/136)) ([894f139](https://github.com/owen-grady/uds-core-slim-dev/commit/894f139c3ef84eba8caf955b70b42bd84e8279cd))
* **deps:** update grafana to v7.3.0 ([#142](https://github.com/owen-grady/uds-core-slim-dev/issues/142)) ([2dd50ee](https://github.com/owen-grady/uds-core-slim-dev/commit/2dd50eed66c32754ed657d55e6af0808df4553e8))
* **deps:** update istio to v1.20.2 ([#75](https://github.com/owen-grady/uds-core-slim-dev/issues/75)) ([72ee055](https://github.com/owen-grady/uds-core-slim-dev/commit/72ee05547062844f13267ec4e124ac3a78922887))
* **deps:** update istio to v1.20.3 ([#163](https://github.com/owen-grady/uds-core-slim-dev/issues/163)) ([bc8cf19](https://github.com/owen-grady/uds-core-slim-dev/commit/bc8cf19adc66d685114119f1dd6cf05cdc123c60))
* **deps:** update loki ([#131](https://github.com/owen-grady/uds-core-slim-dev/issues/131)) ([d9d32da](https://github.com/owen-grady/uds-core-slim-dev/commit/d9d32da0cefca4edbc56e9fa8183059beb908d59))
* **deps:** update loki ([#209](https://github.com/owen-grady/uds-core-slim-dev/issues/209)) ([b6eae0e](https://github.com/owen-grady/uds-core-slim-dev/commit/b6eae0e9a540d97489121e34a5e654e093a4186d))
* **deps:** update loki ([#72](https://github.com/owen-grady/uds-core-slim-dev/issues/72)) ([4c6da50](https://github.com/owen-grady/uds-core-slim-dev/commit/4c6da50f9f059dd14ff1c537917ac22d53c17a59))
* **deps:** update loki to v5.43.0 ([#180](https://github.com/owen-grady/uds-core-slim-dev/issues/180)) ([17d4fc6](https://github.com/owen-grady/uds-core-slim-dev/commit/17d4fc6089ee24de9ddb65e96e6f260300f8ea17))
* **deps:** update loki to v5.43.1 ([#182](https://github.com/owen-grady/uds-core-slim-dev/issues/182)) ([3d54f0f](https://github.com/owen-grady/uds-core-slim-dev/commit/3d54f0fdabed29d24891f38cd60da6d0cde1f900))
* **deps:** update loki to v5.43.2 ([#191](https://github.com/owen-grady/uds-core-slim-dev/issues/191)) ([70ca0ff](https://github.com/owen-grady/uds-core-slim-dev/commit/70ca0ff706a31df39d340db37d265482439b1f27))
* **deps:** update loki to v5.43.3 ([#199](https://github.com/owen-grady/uds-core-slim-dev/issues/199)) ([22d474c](https://github.com/owen-grady/uds-core-slim-dev/commit/22d474ca2714f5d36eb0774f8a478fbacc19e4c9))
* **deps:** update metrics-server ([#123](https://github.com/owen-grady/uds-core-slim-dev/issues/123)) ([552369d](https://github.com/owen-grady/uds-core-slim-dev/commit/552369deed3b3c679dc3104576185fcc2d948929))
* **deps:** update neuvector ([#73](https://github.com/owen-grady/uds-core-slim-dev/issues/73)) ([d4f3e9e](https://github.com/owen-grady/uds-core-slim-dev/commit/d4f3e9e6c3098e24ef21798dc9a6325990bcc2d5))
* **deps:** update pepr ([#116](https://github.com/owen-grady/uds-core-slim-dev/issues/116)) ([08c1882](https://github.com/owen-grady/uds-core-slim-dev/commit/08c18823d95b0b066a15575b1b07a01665a33511))
* **deps:** update pepr ([#76](https://github.com/owen-grady/uds-core-slim-dev/issues/76)) ([f96747f](https://github.com/owen-grady/uds-core-slim-dev/commit/f96747f16f39b41038191c614ae429ebdc618f9e))
* **deps:** update pepr to v0.22.0 ([#102](https://github.com/owen-grady/uds-core-slim-dev/issues/102)) ([6f24764](https://github.com/owen-grady/uds-core-slim-dev/commit/6f24764969635c974990bc75d0b03fcc6b4581e2))
* **deps:** update pepr to v0.22.2 ([#104](https://github.com/owen-grady/uds-core-slim-dev/issues/104)) ([2d71094](https://github.com/owen-grady/uds-core-slim-dev/commit/2d7109469886b9139187326ba272a273a1dd3710))
* **deps:** update pepr to v0.24.1 ([#134](https://github.com/owen-grady/uds-core-slim-dev/issues/134)) ([a13a8c9](https://github.com/owen-grady/uds-core-slim-dev/commit/a13a8c9402c8b7ae4204771d5956c9d45b3e05ec))
* **deps:** update pepr to v0.25.0 ([#164](https://github.com/owen-grady/uds-core-slim-dev/issues/164)) ([793c434](https://github.com/owen-grady/uds-core-slim-dev/commit/793c4347c7c1c2372833a1d7b16b6f8214e18cd5))
* **deps:** update pepr to v0.28.6 ([#254](https://github.com/owen-grady/uds-core-slim-dev/issues/254)) ([5e2680e](https://github.com/owen-grady/uds-core-slim-dev/commit/5e2680ef9c4865e8d2acfc1f7ef905c58cd92d1d))
* **deps:** update pepr to v0.28.6 ([#300](https://github.com/owen-grady/uds-core-slim-dev/issues/300)) ([beb377e](https://github.com/owen-grady/uds-core-slim-dev/commit/beb377ebb8a9a782361b4505094f2a1be5bd43ed))
* **deps:** update pepr to v0.28.7 ([#321](https://github.com/owen-grady/uds-core-slim-dev/issues/321)) ([7124cb1](https://github.com/owen-grady/uds-core-slim-dev/commit/7124cb19b5fdb0f51a07abec19aa7c940d2071f9))
* **deps:** update prometheus-stack ([#128](https://github.com/owen-grady/uds-core-slim-dev/issues/128)) ([9ede83b](https://github.com/owen-grady/uds-core-slim-dev/commit/9ede83b67b853fcd59889bac9ada53012a72d713))
* **deps:** update prometheus-stack ([#190](https://github.com/owen-grady/uds-core-slim-dev/issues/190)) ([97a6bb1](https://github.com/owen-grady/uds-core-slim-dev/commit/97a6bb1e7fa06f32b7487bb3e04694ad13349afd))
* **deps:** update prometheus-stack ([#81](https://github.com/owen-grady/uds-core-slim-dev/issues/81)) ([33a3301](https://github.com/owen-grady/uds-core-slim-dev/commit/33a33015c682c9a36ee2713ee1a0e5461b7e5d1c))
* **deps:** update promtail ([#74](https://github.com/owen-grady/uds-core-slim-dev/issues/74)) ([745561a](https://github.com/owen-grady/uds-core-slim-dev/commit/745561a206c52c959c3e9560a64342c012f59bad))
* **deps:** update uds to v0.5.3, zarf to v0.32.1, and uds-k3d to 0.3.0 ([#77](https://github.com/owen-grady/uds-core-slim-dev/issues/77)) ([de5bf2f](https://github.com/owen-grady/uds-core-slim-dev/commit/de5bf2f5af4fd159ac71543f4d91da709539ce74))
* **deps:** update uds to v0.6.2 ([#107](https://github.com/owen-grady/uds-core-slim-dev/issues/107)) ([b9cd481](https://github.com/owen-grady/uds-core-slim-dev/commit/b9cd4818ecaf6635677a643521b9c32d32994ab9))
* **deps:** update uds to v0.8.1 ([#141](https://github.com/owen-grady/uds-core-slim-dev/issues/141)) ([1f2fd3b](https://github.com/owen-grady/uds-core-slim-dev/commit/1f2fd3b88049144229f7d91b6f8f92923e6e6333))
* **deps:** update uds to v0.9.0 ([#173](https://github.com/owen-grady/uds-core-slim-dev/issues/173)) ([f2a51bc](https://github.com/owen-grady/uds-core-slim-dev/commit/f2a51bcf28a50d50386102c8dbff4a9f362aa712))
* **deps:** update uds to v0.9.2 ([#200](https://github.com/owen-grady/uds-core-slim-dev/issues/200)) ([867a927](https://github.com/owen-grady/uds-core-slim-dev/commit/867a927b1983520e93e269d3db0db0c5c5ec0dd7))
* **deps:** update uds-k3d to v0.3.1 ([#89](https://github.com/owen-grady/uds-core-slim-dev/issues/89)) ([ea9956a](https://github.com/owen-grady/uds-core-slim-dev/commit/ea9956aed1130e0a171eb79a7a2d66191adefd49))
* **deps:** update uds-k3d to v0.5.0 ([#186](https://github.com/owen-grady/uds-core-slim-dev/issues/186)) ([b335d7b](https://github.com/owen-grady/uds-core-slim-dev/commit/b335d7ba46abf85ccc6c9778d6f8d0e5935ddb24))
* **deps:** update uds-k3d to v0.6.0 ([#240](https://github.com/owen-grady/uds-core-slim-dev/issues/240)) ([43d28a8](https://github.com/owen-grady/uds-core-slim-dev/commit/43d28a8975dfead8c7d73eba67919667817f1538))
* **deps:** update velero ([#260](https://github.com/owen-grady/uds-core-slim-dev/issues/260)) ([bacb830](https://github.com/owen-grady/uds-core-slim-dev/commit/bacb8300e93f2c7a845c714ebef1f01424c68256))
* **deps:** update zarf to v0.32.2 ([#133](https://github.com/owen-grady/uds-core-slim-dev/issues/133)) ([e8d594c](https://github.com/owen-grady/uds-core-slim-dev/commit/e8d594cb51867f7b411546db2d4033e351844d3c))
* **deps:** update zarf to v0.32.3 ([#155](https://github.com/owen-grady/uds-core-slim-dev/issues/155)) ([ad15cc5](https://github.com/owen-grady/uds-core-slim-dev/commit/ad15cc53bdaf26a5520ea2ef9cd92cd507fb117d))
* **deps:** update zarf to v0.32.4 ([#203](https://github.com/owen-grady/uds-core-slim-dev/issues/203)) ([9621a82](https://github.com/owen-grady/uds-core-slim-dev/commit/9621a82b187e449ad2f3fa6eaeb3899757af7385))
* **deps:** update zarf to v0.32.5 ([#243](https://github.com/owen-grady/uds-core-slim-dev/issues/243)) ([6de74fa](https://github.com/owen-grady/uds-core-slim-dev/commit/6de74fa61e3e4afbdb00509e15829a208b7e0e5a))
* **deps:** update zarf to v0.32.6 ([#282](https://github.com/owen-grady/uds-core-slim-dev/issues/282)) ([733ac9d](https://github.com/owen-grady/uds-core-slim-dev/commit/733ac9d866f76bb5b66a0489818081de3aa5bb33))
* fix missing deps in tag and release workflow ([#28](https://github.com/owen-grady/uds-core-slim-dev/issues/28)) ([50739ad](https://github.com/owen-grady/uds-core-slim-dev/commit/50739ad896cbffe0b5c579784206df95aa082673))
* initial renovate config ([#67](https://github.com/owen-grady/uds-core-slim-dev/issues/67)) ([f80b9a8](https://github.com/owen-grady/uds-core-slim-dev/commit/f80b9a85acfba0b15681388d04cc786726cfb274))
* kick off ci ([063d054](https://github.com/owen-grady/uds-core-slim-dev/commit/063d054b1b30d007b05f38eaedb886fee639bdeb))
* **main:** release 0.1.1 ([#27](https://github.com/owen-grady/uds-core-slim-dev/issues/27)) ([77a8905](https://github.com/owen-grady/uds-core-slim-dev/commit/77a890557819d085a5fefddb34e82d11b81a01b7))
* **main:** release 0.1.2 ([#29](https://github.com/owen-grady/uds-core-slim-dev/issues/29)) ([bd570c8](https://github.com/owen-grady/uds-core-slim-dev/commit/bd570c8aab8e1ce8a7c50675b6580e1cee5059cc))
* **main:** release 0.1.3 ([#31](https://github.com/owen-grady/uds-core-slim-dev/issues/31)) ([fbfadaa](https://github.com/owen-grady/uds-core-slim-dev/commit/fbfadaa6d8af8716b79cc15c905d8cb0bc22756e))
* **main:** release 0.10.0 ([#135](https://github.com/owen-grady/uds-core-slim-dev/issues/135)) ([1e46e97](https://github.com/owen-grady/uds-core-slim-dev/commit/1e46e97671862dd156fdc9e634e2e6c9ea38d520))
* **main:** release 0.11.0 ([#138](https://github.com/owen-grady/uds-core-slim-dev/issues/138)) ([de287cc](https://github.com/owen-grady/uds-core-slim-dev/commit/de287cc357a1e6ab9377c005438e7a09f08d5e68))
* **main:** release 0.11.1 ([#159](https://github.com/owen-grady/uds-core-slim-dev/issues/159)) ([9ec14e7](https://github.com/owen-grady/uds-core-slim-dev/commit/9ec14e75f8208498e5c664e1500576cb3fb1cca3))
* **main:** release 0.12.0 ([#161](https://github.com/owen-grady/uds-core-slim-dev/issues/161)) ([3477c86](https://github.com/owen-grady/uds-core-slim-dev/commit/3477c86e4e0b0abe2fc914614b37bf983051dab0))
* **main:** release 0.13.0 ([#170](https://github.com/owen-grady/uds-core-slim-dev/issues/170)) ([94f697a](https://github.com/owen-grady/uds-core-slim-dev/commit/94f697aec8bc1e8e699e6c324d01f875d4ec6f3f))
* **main:** release 0.13.1 ([#197](https://github.com/owen-grady/uds-core-slim-dev/issues/197)) ([881fee3](https://github.com/owen-grady/uds-core-slim-dev/commit/881fee325e071cd5e707206eaeb851941092b5ae))
* **main:** release 0.14.0 ([#202](https://github.com/owen-grady/uds-core-slim-dev/issues/202)) ([7b08136](https://github.com/owen-grady/uds-core-slim-dev/commit/7b081367ee6c3dd478b02cb36f78dd1b9d2fb5f8))
* **main:** release 0.14.1 ([#218](https://github.com/owen-grady/uds-core-slim-dev/issues/218)) ([4ec8061](https://github.com/owen-grady/uds-core-slim-dev/commit/4ec80618217e6957cb9a8fd0d02980539751b8ba))
* **main:** release 0.14.2 ([#221](https://github.com/owen-grady/uds-core-slim-dev/issues/221)) ([8771723](https://github.com/owen-grady/uds-core-slim-dev/commit/87717231e9183d687db2c7ed4434ff6dbf14ef0f))
* **main:** release 0.14.3 ([#225](https://github.com/owen-grady/uds-core-slim-dev/issues/225)) ([dfe4d1d](https://github.com/owen-grady/uds-core-slim-dev/commit/dfe4d1d14777c98170bcf1b8ad7f102023b996dc))
* **main:** release 0.14.4 ([#227](https://github.com/owen-grady/uds-core-slim-dev/issues/227)) ([46a0071](https://github.com/owen-grady/uds-core-slim-dev/commit/46a0071d09a1c31b3d4a7f7c1799431ffbfcb075))
* **main:** release 0.14.5 ([#230](https://github.com/owen-grady/uds-core-slim-dev/issues/230)) ([fdb89e1](https://github.com/owen-grady/uds-core-slim-dev/commit/fdb89e1c7b846c290464f191f5bdd0cb14db4f06))
* **main:** release 0.15.0 ([#233](https://github.com/owen-grady/uds-core-slim-dev/issues/233)) ([b748df2](https://github.com/owen-grady/uds-core-slim-dev/commit/b748df21bbf84df7cffb1cdb85647fe44ad89da3))
* **main:** release 0.15.1 ([#235](https://github.com/owen-grady/uds-core-slim-dev/issues/235)) ([cb1ba28](https://github.com/owen-grady/uds-core-slim-dev/commit/cb1ba28b39930e704f34524bdd0bf47f398c1307))
* **main:** release 0.16.0 ([#246](https://github.com/owen-grady/uds-core-slim-dev/issues/246)) ([58c0c06](https://github.com/owen-grady/uds-core-slim-dev/commit/58c0c063b067039b6af49c3d15a16acf08d4102a))
* **main:** release 0.16.1 ([#265](https://github.com/owen-grady/uds-core-slim-dev/issues/265)) ([1c218a6](https://github.com/owen-grady/uds-core-slim-dev/commit/1c218a635e48fa7778489e520093b39ae98a8c9e))
* **main:** release 0.17.0 ([#267](https://github.com/owen-grady/uds-core-slim-dev/issues/267)) ([1bf3c64](https://github.com/owen-grady/uds-core-slim-dev/commit/1bf3c644ee45d176d1d9ea99b1b706abe0b9c386))
* **main:** release 0.18.0 ([#286](https://github.com/owen-grady/uds-core-slim-dev/issues/286)) ([3cd45e5](https://github.com/owen-grady/uds-core-slim-dev/commit/3cd45e51c023cd830efae93929d2d84a4cd3a65a))
* **main:** release 0.18.0 ([#318](https://github.com/owen-grady/uds-core-slim-dev/issues/318)) ([dd70597](https://github.com/owen-grady/uds-core-slim-dev/commit/dd70597ba822cbc994e4ba1ca39922b433bd2c4d))
* **main:** release 0.2.0 ([#34](https://github.com/owen-grady/uds-core-slim-dev/issues/34)) ([90b77b5](https://github.com/owen-grady/uds-core-slim-dev/commit/90b77b53fe952bda41dc50c83d7496684aaea03e))
* **main:** release 0.3.0 ([#39](https://github.com/owen-grady/uds-core-slim-dev/issues/39)) ([7c60d92](https://github.com/owen-grady/uds-core-slim-dev/commit/7c60d92a9fa516b51991544691612eb48f1310c4))
* **main:** release 0.4.0 ([#43](https://github.com/owen-grady/uds-core-slim-dev/issues/43)) ([f1b557e](https://github.com/owen-grady/uds-core-slim-dev/commit/f1b557e4756641873f3ed2a6e0c7c21f97f2ee20))
* **main:** release 0.4.1 ([#45](https://github.com/owen-grady/uds-core-slim-dev/issues/45)) ([b200247](https://github.com/owen-grady/uds-core-slim-dev/commit/b20024775c8e0bea17d1857591673e4351fed012))
* **main:** release 0.5.0 ([#49](https://github.com/owen-grady/uds-core-slim-dev/issues/49)) ([40e72b5](https://github.com/owen-grady/uds-core-slim-dev/commit/40e72b5e8c083c97a890ea1f152d18897f1fd088))
* **main:** release 0.6.0 ([#53](https://github.com/owen-grady/uds-core-slim-dev/issues/53)) ([5369c84](https://github.com/owen-grady/uds-core-slim-dev/commit/5369c84f0bd24efaf608653ede4b16a4e0b7b249))
* **main:** release 0.6.1 ([#56](https://github.com/owen-grady/uds-core-slim-dev/issues/56)) ([2c26822](https://github.com/owen-grady/uds-core-slim-dev/commit/2c26822376d02ac9b8bf7a2800c8e1cff4ee240e))
* **main:** release 0.6.2 ([#59](https://github.com/owen-grady/uds-core-slim-dev/issues/59)) ([8222da3](https://github.com/owen-grady/uds-core-slim-dev/commit/8222da3dce2f43f76e8f7eabde01cbf8ff3feca8))
* **main:** release 0.7.0 ([#71](https://github.com/owen-grady/uds-core-slim-dev/issues/71)) ([27ac3de](https://github.com/owen-grady/uds-core-slim-dev/commit/27ac3def467f99ada267e49f8fceeb878e87c937))
* **main:** release 0.7.1 ([#85](https://github.com/owen-grady/uds-core-slim-dev/issues/85)) ([7fbc3f6](https://github.com/owen-grady/uds-core-slim-dev/commit/7fbc3f6519d3cee2bd3ac4341254ecd2b6623c04))
* **main:** release 0.7.2 ([#88](https://github.com/owen-grady/uds-core-slim-dev/issues/88)) ([0c37b02](https://github.com/owen-grady/uds-core-slim-dev/commit/0c37b02ef5881835ae7ccef995b95dd729c5f15d))
* **main:** release 0.7.3 ([#93](https://github.com/owen-grady/uds-core-slim-dev/issues/93)) ([98642c8](https://github.com/owen-grady/uds-core-slim-dev/commit/98642c8b084dc340dddbabe3928037f63cc724bd))
* **main:** release 0.7.4 ([#100](https://github.com/owen-grady/uds-core-slim-dev/issues/100)) ([9d0c830](https://github.com/owen-grady/uds-core-slim-dev/commit/9d0c830bfa2f3fef62db37dddeed76ffe1235293))
* **main:** release 0.8.0 ([#106](https://github.com/owen-grady/uds-core-slim-dev/issues/106)) ([35df0cb](https://github.com/owen-grady/uds-core-slim-dev/commit/35df0cbe7b8c7a2f3abd965886e83f1f52a05552))
* **main:** release 0.8.1 ([#112](https://github.com/owen-grady/uds-core-slim-dev/issues/112)) ([edfa857](https://github.com/owen-grady/uds-core-slim-dev/commit/edfa857325715f0f0d8808099a932b65298cd980))
* **main:** release 0.9.0 ([#117](https://github.com/owen-grady/uds-core-slim-dev/issues/117)) ([e5f51a0](https://github.com/owen-grady/uds-core-slim-dev/commit/e5f51a01500d301734b5621669853dafc51de8a1))
* **main:** release 0.9.1 ([#119](https://github.com/owen-grady/uds-core-slim-dev/issues/119)) ([798f7f5](https://github.com/owen-grady/uds-core-slim-dev/commit/798f7f5a55ec9b703c2e91e5444611a92fe1318c))
* **main:** release 0.9.2 ([#121](https://github.com/owen-grady/uds-core-slim-dev/issues/121)) ([fe8383e](https://github.com/owen-grady/uds-core-slim-dev/commit/fe8383ec0a88056a42566d0b46337fe2a9f22467))
* open the aperture for pr workflow triggering ([#90](https://github.com/owen-grady/uds-core-slim-dev/issues/90)) ([6170680](https://github.com/owen-grady/uds-core-slim-dev/commit/6170680822e4973d0ed520e3b323a2e51fb1c402))
* readme updates & use UDS CLI for zarf ([#137](https://github.com/owen-grady/uds-core-slim-dev/issues/137)) ([5c92480](https://github.com/owen-grady/uds-core-slim-dev/commit/5c924809f18df3b23f0554d2e82f63fc41c76bc3))
* refactor ci for releases to remove certain artifacts ([#125](https://github.com/owen-grady/uds-core-slim-dev/issues/125)) ([da057a2](https://github.com/owen-grady/uds-core-slim-dev/commit/da057a2670fffa49e9bed85c1a2c3ec1ddf91dc7))
* refactor validate.yaml file name and task name ([#62](https://github.com/owen-grady/uds-core-slim-dev/issues/62)) ([04231b9](https://github.com/owen-grady/uds-core-slim-dev/commit/04231b95f1b781d27108755d5679215e5821a2e1))
* remove retry-action action on registry1 docker login ([#160](https://github.com/owen-grady/uds-core-slim-dev/issues/160)) ([8be4623](https://github.com/owen-grady/uds-core-slim-dev/commit/8be4623ebd1a9ff901d144b1456e028b35b10a74))
* remove version from neuvector zarf.yaml ([#11](https://github.com/owen-grady/uds-core-slim-dev/issues/11)) ([8d0e534](https://github.com/owen-grady/uds-core-slim-dev/commit/8d0e534bdb1af240ff2c9a9db9513bd8e05150c8))
* renovate updates ([#140](https://github.com/owen-grady/uds-core-slim-dev/issues/140)) ([34e4d37](https://github.com/owen-grady/uds-core-slim-dev/commit/34e4d3728f003becc7f4cfe717770bc752045d1e))
* simplify promtail values for scrape configs ([#94](https://github.com/owen-grady/uds-core-slim-dev/issues/94)) ([0f05118](https://github.com/owen-grady/uds-core-slim-dev/commit/0f05118a3a6c8338e43301aab45b7f1c0ccc674b))
* support deselection of metrics-server ([#193](https://github.com/owen-grady/uds-core-slim-dev/issues/193)) ([10c2694](https://github.com/owen-grady/uds-core-slim-dev/commit/10c2694ac40d66a3520a62bcf62c305b793fa187))
* support headless keycloak admin user ([#307](https://github.com/owen-grady/uds-core-slim-dev/issues/307)) ([0825d9a](https://github.com/owen-grady/uds-core-slim-dev/commit/0825d9aabba006816b0497eea5289568fe12d47a))
* test artifacts before publish ([#198](https://github.com/owen-grady/uds-core-slim-dev/issues/198)) ([839b9ce](https://github.com/owen-grady/uds-core-slim-dev/commit/839b9ce8c4657253815c69ce3ebedfd7c41df1a0))
* typo fix in README.md ([#280](https://github.com/owen-grady/uds-core-slim-dev/issues/280)) ([2a5be66](https://github.com/owen-grady/uds-core-slim-dev/commit/2a5be66720841bcb724f09763085b11b4f842ede))
* update release please extra-files to be explicit ([#26](https://github.com/owen-grady/uds-core-slim-dev/issues/26)) ([17875cd](https://github.com/owen-grady/uds-core-slim-dev/commit/17875cd15233b44656a6ca7efc683018b187228e))

## [0.18.0](https://github.com/defenseunicorns/uds-core/compare/v0.17.0...v0.18.0) (2024-03-29)


### Features

* switch loki to simple scalable ([#156](https://github.com/defenseunicorns/uds-core/issues/156)) ([1661b15](https://github.com/defenseunicorns/uds-core/commit/1661b154657eba1b30fc5bcec64179cbf6037c03))


### Bug Fixes

* add kubeapi egress for neuvector enforcer ([#291](https://github.com/defenseunicorns/uds-core/issues/291)) ([87fc886](https://github.com/defenseunicorns/uds-core/commit/87fc886bc736104a9a3c3aefc4c7d232ed74a4f2))
* pepr ironbank renovate update ([#299](https://github.com/defenseunicorns/uds-core/issues/299)) ([287e40d](https://github.com/defenseunicorns/uds-core/commit/287e40db5d65f7472a9e9216aae91f3ad92403d9))
* release workflow k3d image ([#316](https://github.com/defenseunicorns/uds-core/issues/316)) ([e7835e0](https://github.com/defenseunicorns/uds-core/commit/e7835e071f56af148792fbde250100af8e8ca0b8))
* unwanted exemption deletions ([#290](https://github.com/defenseunicorns/uds-core/issues/290)) ([50b0cd4](https://github.com/defenseunicorns/uds-core/commit/50b0cd4211964a90139347558028d6c461956da9))


### Miscellaneous

* add debug output to release workflow ([#285](https://github.com/defenseunicorns/uds-core/issues/285)) ([5f96865](https://github.com/defenseunicorns/uds-core/commit/5f968651fb4f0da563d9c388efab761863f9ea08))
* **deps:** update dependency defenseunicorns/uds-common to v0.3.6 ([#261](https://github.com/defenseunicorns/uds-core/issues/261)) ([1b5398b](https://github.com/defenseunicorns/uds-core/commit/1b5398b7b778ead8ac3265080ae0bd2b5761066e))
* **deps:** update githubactions ([#242](https://github.com/defenseunicorns/uds-core/issues/242)) ([1eb2e2c](https://github.com/defenseunicorns/uds-core/commit/1eb2e2cd2018f0cd8fb55d8e6576b7e36fa8c3cf))
* **deps:** update pepr to v0.28.6 ([#300](https://github.com/defenseunicorns/uds-core/issues/300)) ([86b43e4](https://github.com/defenseunicorns/uds-core/commit/86b43e478521aa88a3a4843948ca96b9cbe55985))
* **deps:** update prometheus-stack ([#190](https://github.com/defenseunicorns/uds-core/issues/190)) ([f9a605a](https://github.com/defenseunicorns/uds-core/commit/f9a605a4c828128fc19f0bdb1d2443f65fb87b8a))
* **deps:** update uds-k3d to v0.6.0 ([#240](https://github.com/defenseunicorns/uds-core/issues/240)) ([6a26523](https://github.com/defenseunicorns/uds-core/commit/6a2652368fde3a3bdbe5bb81fd258830dfaeb5c8))
* **deps:** update velero ([#260](https://github.com/defenseunicorns/uds-core/issues/260)) ([f352008](https://github.com/defenseunicorns/uds-core/commit/f35200833a4d4d50de9f632f6918320f7d8fff5e))
* **main:** release 0.18.0 ([#286](https://github.com/defenseunicorns/uds-core/issues/286)) ([40e6b7b](https://github.com/defenseunicorns/uds-core/commit/40e6b7b711ddbd956058eda8490355568faddaec))
* support headless keycloak admin user ([#307](https://github.com/defenseunicorns/uds-core/issues/307)) ([a0e51b6](https://github.com/defenseunicorns/uds-core/commit/a0e51b649822619b63478b140bb5dbbebeb20ff3))

## [0.17.0](https://github.com/defenseunicorns/uds-core/compare/v0.16.1...v0.17.0) (2024-03-22)


### Features

* introduce sso secret templating ([#276](https://github.com/defenseunicorns/uds-core/issues/276)) ([e0832ec](https://github.com/defenseunicorns/uds-core/commit/e0832ec2ee825dc1725483350e3b9295937b8feb))


### Bug Fixes

* add keycloak to dev bundle and rename ([#262](https://github.com/defenseunicorns/uds-core/issues/262)) ([f9b905c](https://github.com/defenseunicorns/uds-core/commit/f9b905c7c2b7e4a6a43e7c83918e3157008433d3))
* registration robot check form id ([#269](https://github.com/defenseunicorns/uds-core/issues/269)) ([c6419b9](https://github.com/defenseunicorns/uds-core/commit/c6419b962eb5a02462e9060a66f7765689cfeb8f))
* sticky sessions for keycloak in ha ([#281](https://github.com/defenseunicorns/uds-core/issues/281)) ([5ccd557](https://github.com/defenseunicorns/uds-core/commit/5ccd5576afc34d8b24061887f91ce284ec5857a1))


### Miscellaneous

* align mutation annotations ([#268](https://github.com/defenseunicorns/uds-core/issues/268)) ([f18ad4d](https://github.com/defenseunicorns/uds-core/commit/f18ad4db94a77f4229cc9267e0129f6aa3381c9a))
* **deps:** update loki ([#209](https://github.com/defenseunicorns/uds-core/issues/209)) ([03ca499](https://github.com/defenseunicorns/uds-core/commit/03ca499bd5d9cac800bd36dca80340ceac3f3009))
* **deps:** update pepr to v0.28.6 ([#254](https://github.com/defenseunicorns/uds-core/issues/254)) ([54ef7de](https://github.com/defenseunicorns/uds-core/commit/54ef7ded349d060b1732b381124fe29e3e8fe85b))
* **deps:** update zarf to v0.32.5 ([#243](https://github.com/defenseunicorns/uds-core/issues/243)) ([ee93612](https://github.com/defenseunicorns/uds-core/commit/ee9361224767c1a708b6f8e2c266af710facea8d))
* typo fix in README.md ([#280](https://github.com/defenseunicorns/uds-core/issues/280)) ([f9727e0](https://github.com/defenseunicorns/uds-core/commit/f9727e0b638e853bbae131d02019a2efb5286b0a))

## [0.16.1](https://github.com/defenseunicorns/uds-core/compare/v0.16.0...v0.16.1) (2024-03-16)


### Bug Fixes

* arm64 packages / bundles creation ([#264](https://github.com/defenseunicorns/uds-core/issues/264)) ([425fa18](https://github.com/defenseunicorns/uds-core/commit/425fa184fca6bcebd1eea431dce7112cadae2f44))

## [0.16.0](https://github.com/defenseunicorns/uds-core/compare/v0.15.1...v0.16.0) (2024-03-15)


### Features

* add velero package ([#210](https://github.com/defenseunicorns/uds-core/issues/210)) ([a272945](https://github.com/defenseunicorns/uds-core/commit/a27294585f0d50732b63672d0c2baf14948e29d1))
* **operator:** add events and improve lifecycle ops ([#245](https://github.com/defenseunicorns/uds-core/issues/245)) ([502c044](https://github.com/defenseunicorns/uds-core/commit/502c044547048a380b1f73dead0b8ab1b14a4b4f))


### Bug Fixes

* ocsp lookup egress policy ([#255](https://github.com/defenseunicorns/uds-core/issues/255)) ([77c38f2](https://github.com/defenseunicorns/uds-core/commit/77c38f22e9a77d9db81504f4c172fdc535c0929e))


### Miscellaneous

* add flavor to pepr build task ([#238](https://github.com/defenseunicorns/uds-core/issues/238)) ([29bf8a3](https://github.com/defenseunicorns/uds-core/commit/29bf8a3b83255c7548201f3ea19e22452a1d1d4a))
* **deps:** update grafana ([#144](https://github.com/defenseunicorns/uds-core/issues/144)) ([6987927](https://github.com/defenseunicorns/uds-core/commit/698792728faf8cfeabaf7a7c735c91229cc0c07f))
* **deps:** update neuvector ([#73](https://github.com/defenseunicorns/uds-core/issues/73)) ([50f6c90](https://github.com/defenseunicorns/uds-core/commit/50f6c90ca31d5bf984e44fd1ded7c5cfcb968064))
* test artifacts before publish ([#198](https://github.com/defenseunicorns/uds-core/issues/198)) ([9732f32](https://github.com/defenseunicorns/uds-core/commit/9732f325624244f4d34c127a949c6ce5951ff6ab))

## [0.15.1](https://github.com/defenseunicorns/uds-core/compare/v0.15.0...v0.15.1) (2024-03-11)


### Bug Fixes

* **keycloak:** only use PVC for devMode ([#241](https://github.com/defenseunicorns/uds-core/issues/241)) ([a6e6023](https://github.com/defenseunicorns/uds-core/commit/a6e6023134dc5171441a2043701ed91309e1b32c))


### Miscellaneous

* annotate mutations in policies ([#236](https://github.com/defenseunicorns/uds-core/issues/236)) ([cc9db50](https://github.com/defenseunicorns/uds-core/commit/cc9db500bb1033a516104f409fa05b3a1101d832))
* **deps:** update zarf to v0.32.4 ([#203](https://github.com/defenseunicorns/uds-core/issues/203)) ([05c903e](https://github.com/defenseunicorns/uds-core/commit/05c903ea43243401d9cc2928ba5eb66ff6201c94))

## [0.15.0](https://github.com/defenseunicorns/uds-core/compare/v0.14.5...v0.15.0) (2024-03-07)


### Features

* add policy exemptions ([#165](https://github.com/defenseunicorns/uds-core/issues/165)) ([196df88](https://github.com/defenseunicorns/uds-core/commit/196df88b01347e530eb1cb49df7440d62c986e0e))


### Miscellaneous

* **deps:** update dependency defenseunicorns/uds-common to v0.2.2 ([#232](https://github.com/defenseunicorns/uds-core/issues/232)) ([083ae0c](https://github.com/defenseunicorns/uds-core/commit/083ae0c45667e5b9064cbff781fbe4e5bc0d2991))
* **deps:** update githubactions to de90cc6 ([#215](https://github.com/defenseunicorns/uds-core/issues/215)) ([f79eed0](https://github.com/defenseunicorns/uds-core/commit/f79eed03b2495d9f3e11edb433291ce8a3aa55ee))

## [0.14.5](https://github.com/defenseunicorns/uds-core/compare/v0.14.4...v0.14.5) (2024-03-06)


### Bug Fixes

* valueFrom in KeyCloak statefulset.yaml ([#229](https://github.com/defenseunicorns/uds-core/issues/229)) ([189a5ce](https://github.com/defenseunicorns/uds-core/commit/189a5ce3a9dd16fe9646a293ca3948db21eb5d78))

## [0.14.4](https://github.com/defenseunicorns/uds-core/compare/v0.14.3...v0.14.4) (2024-03-05)


### Bug Fixes

* remove spec from secret yaml ([#226](https://github.com/defenseunicorns/uds-core/issues/226)) ([e4b5848](https://github.com/defenseunicorns/uds-core/commit/e4b58487f736f588944f7c039b8654f9006e04f1))

## [0.14.3](https://github.com/defenseunicorns/uds-core/compare/v0.14.2...v0.14.3) (2024-03-05)


### Bug Fixes

* **keycloak:** add missing postgres host and port secret keys ([#224](https://github.com/defenseunicorns/uds-core/issues/224)) ([0c4d775](https://github.com/defenseunicorns/uds-core/commit/0c4d7758cfb077ff592fea907795402485b6c9f5))

## [0.14.2](https://github.com/defenseunicorns/uds-core/compare/v0.14.1...v0.14.2) (2024-03-04)


### Bug Fixes

* basic validations for packages ([#208](https://github.com/defenseunicorns/uds-core/issues/208)) ([9eba3af](https://github.com/defenseunicorns/uds-core/commit/9eba3afb7e288c13f75f93d5712d50a3b9e7b92d))
* keycloak volume permissions, UI update ([#223](https://github.com/defenseunicorns/uds-core/issues/223)) ([4454d3e](https://github.com/defenseunicorns/uds-core/commit/4454d3efcefe6bfa81628d330434afcc246fad65))
* kubeapi netpol generation now also includes the ip from the kubernetes service ([#219](https://github.com/defenseunicorns/uds-core/issues/219)) ([0a83d02](https://github.com/defenseunicorns/uds-core/commit/0a83d02f5782d911e3bb63935b0cac70030e5c9b))


### Miscellaneous

* **deps:** update uds to v0.9.2 ([#200](https://github.com/defenseunicorns/uds-core/issues/200)) ([e4b54fe](https://github.com/defenseunicorns/uds-core/commit/e4b54febc4d7914e962db92b7a0490a3735af4e5))
* **deps:** update uds-k3d to v0.5.0 ([#186](https://github.com/defenseunicorns/uds-core/issues/186)) ([164bf5f](https://github.com/defenseunicorns/uds-core/commit/164bf5f8bd58899f5ec1a179d6d409cfb46b850f))

## [0.14.1](https://github.com/defenseunicorns/uds-core/compare/v0.14.0...v0.14.1) (2024-03-04)


### Bug Fixes

* hotfix for publishing workflows ([#217](https://github.com/defenseunicorns/uds-core/issues/217)) ([5fefa01](https://github.com/defenseunicorns/uds-core/commit/5fefa017d382b7c5557e613b81cd84b27bda85f0))

## [0.14.0](https://github.com/defenseunicorns/uds-core/compare/v0.13.1...v0.14.0) (2024-03-04)


### Features

* add keycloak ([#147](https://github.com/defenseunicorns/uds-core/issues/147)) ([f99d3d5](https://github.com/defenseunicorns/uds-core/commit/f99d3d5d4f89264a21dd76d8847e1cef0325d127))


### Miscellaneous

* **deps:** update dependency defenseunicorns/uds-common to v0.2.1 ([#205](https://github.com/defenseunicorns/uds-core/issues/205)) ([1b01407](https://github.com/defenseunicorns/uds-core/commit/1b01407c4ae3a707db381b07e1364c572c76eceb))
* **deps:** update githubactions to v19 ([#204](https://github.com/defenseunicorns/uds-core/issues/204)) ([d65acd4](https://github.com/defenseunicorns/uds-core/commit/d65acd4e2d37907685ba9083ff98988b4ea1d452))
* **deps:** update loki to v5.43.3 ([#199](https://github.com/defenseunicorns/uds-core/issues/199)) ([40f1554](https://github.com/defenseunicorns/uds-core/commit/40f155469670a4b7290819fc09d28ff1fcc06a81))
* **deps:** update metrics-server ([#123](https://github.com/defenseunicorns/uds-core/issues/123)) ([fb25a97](https://github.com/defenseunicorns/uds-core/commit/fb25a970d6e3b51432164fab05ea2d19d1a638ef))

## [0.13.1](https://github.com/defenseunicorns/uds-core/compare/v0.13.0...v0.13.1) (2024-02-21)


### Bug Fixes

* revert "chore: support deselection of metrics-server" ([#196](https://github.com/defenseunicorns/uds-core/issues/196)) ([25a408d](https://github.com/defenseunicorns/uds-core/commit/25a408daeb7f6daada11c21e451f973ebe92c07c))

## [0.13.0](https://github.com/defenseunicorns/uds-core/compare/v0.12.0...v0.13.0) (2024-02-20)


### Features

* add authservice to uds-core ([#153](https://github.com/defenseunicorns/uds-core/issues/153)) ([b0b33b9](https://github.com/defenseunicorns/uds-core/commit/b0b33b98ae12fe233c922bba55c9328212c2e578))


### Bug Fixes

* validating/mutating webhook networkpolicies and mtls ([#192](https://github.com/defenseunicorns/uds-core/issues/192)) ([b01e629](https://github.com/defenseunicorns/uds-core/commit/b01e62960985dd7cb318372abff296fb96f1012b))


### Miscellaneous

* add security.md ([#189](https://github.com/defenseunicorns/uds-core/issues/189)) ([bf7c1d2](https://github.com/defenseunicorns/uds-core/commit/bf7c1d28e077cf52d4f765b50d7efb8ce5d60fff))
* **deps:** update githubactions ([#179](https://github.com/defenseunicorns/uds-core/issues/179)) ([7797e25](https://github.com/defenseunicorns/uds-core/commit/7797e259b9691099cce9e151ce1ebf9f9f181435))
* **deps:** update githubactions to ebc4d7e ([#183](https://github.com/defenseunicorns/uds-core/issues/183)) ([77357e7](https://github.com/defenseunicorns/uds-core/commit/77357e72cc0344e61fedcab7197aabdd7e4fd2a0))
* **deps:** update githubactions to v3 ([#181](https://github.com/defenseunicorns/uds-core/issues/181)) ([70c5ddf](https://github.com/defenseunicorns/uds-core/commit/70c5ddf1ee0e5017bee4057d96b320812a964f88))
* **deps:** update istio to v1.20.3 ([#163](https://github.com/defenseunicorns/uds-core/issues/163)) ([e45de0e](https://github.com/defenseunicorns/uds-core/commit/e45de0e5917a2ca6c3e30e593e2d9a8d393849a9))
* **deps:** update loki to v5.43.0 ([#180](https://github.com/defenseunicorns/uds-core/issues/180)) ([bab5f7a](https://github.com/defenseunicorns/uds-core/commit/bab5f7aba3644c0e478a17338df4e074b0c1a6a2))
* **deps:** update loki to v5.43.1 ([#182](https://github.com/defenseunicorns/uds-core/issues/182)) ([6cc5fc7](https://github.com/defenseunicorns/uds-core/commit/6cc5fc7f5a07d848cfe4f18dc9a7e2a4cd91b1cf))
* **deps:** update loki to v5.43.2 ([#191](https://github.com/defenseunicorns/uds-core/issues/191)) ([0ec0cd4](https://github.com/defenseunicorns/uds-core/commit/0ec0cd4d6cdc7b4eb1eea33f4da7b144ecbc29a5))
* **deps:** update pepr to v0.25.0 ([#164](https://github.com/defenseunicorns/uds-core/issues/164)) ([e7b8212](https://github.com/defenseunicorns/uds-core/commit/e7b8212b6a8ed2e16b47264687e0c39d2f0a3455))
* **deps:** update uds to v0.9.0 ([#173](https://github.com/defenseunicorns/uds-core/issues/173)) ([b91a90d](https://github.com/defenseunicorns/uds-core/commit/b91a90db987e108a5a093a326428bbd0b5f9446e))
* **deps:** update zarf to v0.32.3 ([#155](https://github.com/defenseunicorns/uds-core/issues/155)) ([2f0a1a7](https://github.com/defenseunicorns/uds-core/commit/2f0a1a77043ce298e765e6999cf11a97f36e4ecc))
* support deselection of metrics-server ([#193](https://github.com/defenseunicorns/uds-core/issues/193)) ([289a0fe](https://github.com/defenseunicorns/uds-core/commit/289a0fee5315e8c4a70b3afe66165dd00a7dfbc1))

## [0.12.0](https://github.com/defenseunicorns/uds-core/compare/v0.11.1...v0.12.0) (2024-02-09)


### Features

* introduce advancedHTTP for expose field & change podLabels to selector ([#154](https://github.com/defenseunicorns/uds-core/issues/154)) ([1079267](https://github.com/defenseunicorns/uds-core/commit/107926791149989a782254b8798b7c57a35cfcaf))


### Miscellaneous

* **deps:** pin dependencies ([#79](https://github.com/defenseunicorns/uds-core/issues/79)) ([bfab11e](https://github.com/defenseunicorns/uds-core/commit/bfab11e345941d23dfeb928917f38e36a2f75bc9))
* remove retry-action action on registry1 docker login ([#160](https://github.com/defenseunicorns/uds-core/issues/160)) ([eea0c93](https://github.com/defenseunicorns/uds-core/commit/eea0c93a0ff172bfc5a76d3eaca143ffc0d9fbe2))

## [0.11.1](https://github.com/defenseunicorns/uds-core/compare/v0.11.0...v0.11.1) (2024-02-08)


### Bug Fixes

* non-vendored zarf command refs ([#157](https://github.com/defenseunicorns/uds-core/issues/157)) ([fe183a9](https://github.com/defenseunicorns/uds-core/commit/fe183a9ae367bc2d7ea7d629e7c15877aabe38cd))

## [0.11.0](https://github.com/defenseunicorns/uds-core/compare/v0.10.0...v0.11.0) (2024-02-07)


### Features

* added initial oscal files ([#145](https://github.com/defenseunicorns/uds-core/issues/145)) ([9600d5f](https://github.com/defenseunicorns/uds-core/commit/9600d5f159e4a04e8f71313f8ed118b87efbb9a1))


### Bug Fixes

* network policy to allow metrics-server ingress ([#148](https://github.com/defenseunicorns/uds-core/issues/148)) ([f1d434a](https://github.com/defenseunicorns/uds-core/commit/f1d434a68ef1f2a29ab3b13608bc16ce78211ed4))


### Miscellaneous

* **deps:** update grafana to v7.2.5 ([#136](https://github.com/defenseunicorns/uds-core/issues/136)) ([a271270](https://github.com/defenseunicorns/uds-core/commit/a271270f2d3f3488aa9664ef5ad69a4d239c5d22))
* **deps:** update grafana to v7.3.0 ([#142](https://github.com/defenseunicorns/uds-core/issues/142)) ([5e960c0](https://github.com/defenseunicorns/uds-core/commit/5e960c0479e6fc96244db0230296c94e936e57d8))
* **deps:** update loki ([#131](https://github.com/defenseunicorns/uds-core/issues/131)) ([61250b0](https://github.com/defenseunicorns/uds-core/commit/61250b02eca7ca57d7f346c1da5b63f19de17c49))
* **deps:** update pepr to v0.24.1 ([#134](https://github.com/defenseunicorns/uds-core/issues/134)) ([6474a1c](https://github.com/defenseunicorns/uds-core/commit/6474a1c0a16c8d87248acb1b3f7d79b76a354fc8))
* **deps:** update prometheus-stack ([#128](https://github.com/defenseunicorns/uds-core/issues/128)) ([625622a](https://github.com/defenseunicorns/uds-core/commit/625622a44c101f0a9c1beffd66eb259dc1f1eedc))
* **deps:** update uds to v0.8.1 ([#141](https://github.com/defenseunicorns/uds-core/issues/141)) ([fa79065](https://github.com/defenseunicorns/uds-core/commit/fa79065265a5ee2b8f6f6a55d1c2904bbaf42fff))
* **deps:** update zarf to v0.32.2 ([#133](https://github.com/defenseunicorns/uds-core/issues/133)) ([91502c6](https://github.com/defenseunicorns/uds-core/commit/91502c6321334c6d31ce5fd1cd8f2fe6f77c09ae))
* readme updates & use UDS CLI for zarf ([#137](https://github.com/defenseunicorns/uds-core/issues/137)) ([21de0ce](https://github.com/defenseunicorns/uds-core/commit/21de0cee2d70d67ca17b1d45c642e9ca4e1617ce))
* renovate updates ([#140](https://github.com/defenseunicorns/uds-core/issues/140)) ([b71a013](https://github.com/defenseunicorns/uds-core/commit/b71a013bea30c9ca5e39f1dc6485fffaa86ca6b1))

## [0.10.0](https://github.com/defenseunicorns/uds-core/compare/v0.9.2...v0.10.0) (2024-01-26)


### Features

* add Istio VirtualService Requestmatch to UDS Operator ([#129](https://github.com/defenseunicorns/uds-core/issues/129)) ([a207197](https://github.com/defenseunicorns/uds-core/commit/a20719726991d3b981a372b705b776948f6fbc30))


### Miscellaneous

* **deps:** update grafana to v10.3.1 ([#132](https://github.com/defenseunicorns/uds-core/issues/132)) ([09e028c](https://github.com/defenseunicorns/uds-core/commit/09e028c63093a6f5fdfd0b1be800b07c0eb9de77))
* **deps:** update istio to v1.20.2 ([#75](https://github.com/defenseunicorns/uds-core/issues/75)) ([671f977](https://github.com/defenseunicorns/uds-core/commit/671f977ff183010ce75e323532db500dcd4aa69c))

## [0.9.2](https://github.com/defenseunicorns/uds-core/compare/v0.9.1...v0.9.2) (2024-01-24)


### Miscellaneous

* **deps:** update grafana ([#80](https://github.com/defenseunicorns/uds-core/issues/80)) ([ccb2c12](https://github.com/defenseunicorns/uds-core/commit/ccb2c1280313fe69198ecab5fea5b38fc650f699))
* **deps:** update loki ([#72](https://github.com/defenseunicorns/uds-core/issues/72)) ([98134bb](https://github.com/defenseunicorns/uds-core/commit/98134bba1f6078a867aae2ae28f4152ba7b1a8e5))
* **deps:** update pepr ([#116](https://github.com/defenseunicorns/uds-core/issues/116)) ([bfa7352](https://github.com/defenseunicorns/uds-core/commit/bfa7352ebe962ef1ed091f4a5799ed4974e086ef))
* **deps:** update prometheus-stack ([#81](https://github.com/defenseunicorns/uds-core/issues/81)) ([19bedb6](https://github.com/defenseunicorns/uds-core/commit/19bedb60cd2f99615c4b5673623ff0ff6fafb73f))
* **deps:** update uds to v0.6.2 ([#107](https://github.com/defenseunicorns/uds-core/issues/107)) ([7b7220e](https://github.com/defenseunicorns/uds-core/commit/7b7220e708cf2dca25cc592b8932661620d9610d))
* **deps:** update uds-k3d to v0.3.1 ([#89](https://github.com/defenseunicorns/uds-core/issues/89)) ([5d54cd1](https://github.com/defenseunicorns/uds-core/commit/5d54cd1efe5eee4c19caf347882725e0aa20e50a))
* refactor ci for releases to remove certain artifacts ([#125](https://github.com/defenseunicorns/uds-core/issues/125)) ([c08a062](https://github.com/defenseunicorns/uds-core/commit/c08a062bb3f3ede6860c3d7f34136b3e82b78715))

## [0.9.1](https://github.com/defenseunicorns/uds-core/compare/v0.9.0...v0.9.1) (2024-01-22)


### Bug Fixes

* update missing flavor create inputs in publish step ([#118](https://github.com/defenseunicorns/uds-core/issues/118)) ([a0233eb](https://github.com/defenseunicorns/uds-core/commit/a0233eb45e2d39035f483f3ed8fb3f396e5030d8))

## [0.9.0](https://github.com/defenseunicorns/uds-core/compare/v0.8.1...v0.9.0) (2024-01-21)


### Features

* add Zarf Flavors to support Iron Bank & upstream images ([#63](https://github.com/defenseunicorns/uds-core/issues/63)) ([232c256](https://github.com/defenseunicorns/uds-core/commit/232c2566b96be0285c24b8b5787350897e72332f))

## [0.8.1](https://github.com/defenseunicorns/uds-core/compare/v0.8.0...v0.8.1) (2024-01-18)


### Bug Fixes

* remove loki gateway anti-affinity ([#111](https://github.com/defenseunicorns/uds-core/issues/111)) ([2cba42e](https://github.com/defenseunicorns/uds-core/commit/2cba42e3a83a25ae7a45f3c3d6a35bdc7bba0b58))

## [0.8.0](https://github.com/defenseunicorns/uds-core/compare/v0.7.4...v0.8.0) (2024-01-16)


### Features

* add UDS Operator and consolidate UDS Policies ([#66](https://github.com/defenseunicorns/uds-core/issues/66)) ([395c1c4](https://github.com/defenseunicorns/uds-core/commit/395c1c4aec324d0d939cc410a6bb92129b26653b))


### Miscellaneous

* adding unit test for registerExemptions() ([#105](https://github.com/defenseunicorns/uds-core/issues/105)) ([5e71fcf](https://github.com/defenseunicorns/uds-core/commit/5e71fcf4751d2e3f6a1e55583ccf76c0fdc76856))
* **deps:** update pepr to v0.22.2 ([#104](https://github.com/defenseunicorns/uds-core/issues/104)) ([0555353](https://github.com/defenseunicorns/uds-core/commit/0555353e5a5dec2aa8685a3987852d1c3788f28c))

## [0.7.4](https://github.com/defenseunicorns/uds-core/compare/v0.7.3...v0.7.4) (2024-01-13)


### Bug Fixes

* change pepr error policy to reject ([#99](https://github.com/defenseunicorns/uds-core/issues/99)) ([10772e2](https://github.com/defenseunicorns/uds-core/commit/10772e2c64f1e4b965b6b644b0008c81025029e9))


### Miscellaneous

* **deps:** update pepr to v0.22.0 ([#102](https://github.com/defenseunicorns/uds-core/issues/102)) ([941902d](https://github.com/defenseunicorns/uds-core/commit/941902dcfc2ec1d5340d658f75811b3369489c56))

## [0.7.3](https://github.com/defenseunicorns/uds-core/compare/v0.7.2...v0.7.3) (2024-01-11)


### Bug Fixes

* add test for disallow selinux options and handle checking for us… ([#96](https://github.com/defenseunicorns/uds-core/issues/96)) ([88b969e](https://github.com/defenseunicorns/uds-core/commit/88b969e2aa4dea8b76dbe397d77c53941f7cfbc8))


### Miscellaneous

* **deps:** update uds to v0.5.3, zarf to v0.32.1, and uds-k3d to 0.3.0 ([#77](https://github.com/defenseunicorns/uds-core/issues/77)) ([596f9d8](https://github.com/defenseunicorns/uds-core/commit/596f9d8df51c3df1aa87fd0e09d9e69c87473bf0))
* open the aperture for pr workflow triggering ([#90](https://github.com/defenseunicorns/uds-core/issues/90)) ([d8a72f2](https://github.com/defenseunicorns/uds-core/commit/d8a72f2f2f3e507a4be7f217e23b737e3d4c35ce))
* simplify promtail values for scrape configs ([#94](https://github.com/defenseunicorns/uds-core/issues/94)) ([6c2513b](https://github.com/defenseunicorns/uds-core/commit/6c2513be89f064b44516b1d89c0d6005dd1d4d30))

## [0.7.2](https://github.com/defenseunicorns/uds-core/compare/v0.7.1...v0.7.2) (2024-01-09)


### Bug Fixes

* wait on istio proxies ([#87](https://github.com/defenseunicorns/uds-core/issues/87)) ([51cd5a0](https://github.com/defenseunicorns/uds-core/commit/51cd5a012cc1d095a89b30a22910d3d7ad49885d))


### Miscellaneous

* kick off ci ([1afc3a4](https://github.com/defenseunicorns/uds-core/commit/1afc3a4203cce1a1c81b15e7ba6caad1a9c63131))

## [0.7.1](https://github.com/defenseunicorns/uds-core/compare/v0.7.0...v0.7.1) (2024-01-08)


### Bug Fixes

* loki local storage ([#84](https://github.com/defenseunicorns/uds-core/issues/84)) ([b9505bb](https://github.com/defenseunicorns/uds-core/commit/b9505bbb42b5369c62d7cbfb05e1efb8b8a6200f))


### Miscellaneous

* **deps:** update pepr ([#76](https://github.com/defenseunicorns/uds-core/issues/76)) ([50de920](https://github.com/defenseunicorns/uds-core/commit/50de920bcf03092d16a11ebf77ede70987a7cdcf))

## [0.7.0](https://github.com/defenseunicorns/uds-core/compare/v0.6.2...v0.7.0) (2024-01-05)


### Features

* update security policy to use provided user, group, and fsgroup ([#82](https://github.com/defenseunicorns/uds-core/issues/82)) ([6d641ce](https://github.com/defenseunicorns/uds-core/commit/6d641ce67210999bacda0e855269dca61e7c6a7b))


### Miscellaneous

* initial renovate config ([#67](https://github.com/defenseunicorns/uds-core/issues/67)) ([2cd19d8](https://github.com/defenseunicorns/uds-core/commit/2cd19d871a95491950d43fea8e8fd2e8c290cd55))

## [0.6.2](https://github.com/defenseunicorns/uds-core/compare/v0.6.1...v0.6.2) (2023-12-11)


### Miscellaneous

* add minio deploy time bundle variable override definitions ([#58](https://github.com/defenseunicorns/uds-core/issues/58)) ([ca28e7b](https://github.com/defenseunicorns/uds-core/commit/ca28e7b4c4a42769934cc8ad69361ff29a348cc5))
* refactor validate.yaml file name and task name ([#62](https://github.com/defenseunicorns/uds-core/issues/62)) ([92a04ea](https://github.com/defenseunicorns/uds-core/commit/92a04ea1096448995ccc0dd9d77a32a5061e06f0))

## [0.6.1](https://github.com/defenseunicorns/uds-core/compare/v0.6.0...v0.6.1) (2023-12-07)


### Bug Fixes

* resolve istio job termination container status logic issue ([#55](https://github.com/defenseunicorns/uds-core/issues/55)) ([c0142c2](https://github.com/defenseunicorns/uds-core/commit/c0142c213446a37185cdf9dec5ae60aaae8ba194))

## [0.6.0](https://github.com/defenseunicorns/uds-core/compare/v0.5.0...v0.6.0) (2023-12-05)


### Features

* introduce Pepr common policies ([#50](https://github.com/defenseunicorns/uds-core/issues/50)) ([54182b4](https://github.com/defenseunicorns/uds-core/commit/54182b4db691d86ce80379be272d924d105b0d07))


### Miscellaneous

* conform to latest uds bundle schema ([#52](https://github.com/defenseunicorns/uds-core/issues/52)) ([14dad38](https://github.com/defenseunicorns/uds-core/commit/14dad3819187d4f8e13f7bbc191dca74a29b9c98))

## [0.5.0](https://github.com/defenseunicorns/uds-core/compare/v0.4.1...v0.5.0) (2023-11-19)


### Features

* expose tls certs as UDS bundle variables ([#48](https://github.com/defenseunicorns/uds-core/issues/48)) ([c1f8286](https://github.com/defenseunicorns/uds-core/commit/c1f828650ef2c53a3fd9ed477950046020c5d375))

## [0.4.1](https://github.com/defenseunicorns/uds-core/compare/v0.4.0...v0.4.1) (2023-11-17)


### Bug Fixes

* metrics-server mTLS fix ([#44](https://github.com/defenseunicorns/uds-core/issues/44)) ([4853522](https://github.com/defenseunicorns/uds-core/commit/4853522c9504c87dcbd8319d689ecb0a1cb42c0b))


### Miscellaneous

* dep updates for UDS CLI & Pepr ([#46](https://github.com/defenseunicorns/uds-core/issues/46)) ([1037634](https://github.com/defenseunicorns/uds-core/commit/10376349e350bd32f3bf32577d8f8089c09ac6cc))

## [0.4.0](https://github.com/defenseunicorns/uds-core/compare/v0.3.0...v0.4.0) (2023-11-16)


### Features

* add monitoring and logging ([#33](https://github.com/defenseunicorns/uds-core/issues/33)) ([c6d9aec](https://github.com/defenseunicorns/uds-core/commit/c6d9aece4984421e1ccbf476cd0d40fb701e4e50))

## [0.3.0](https://github.com/defenseunicorns/uds-core/compare/v0.2.0...v0.3.0) (2023-11-15)


### Features

* add metrics-server ([#35](https://github.com/defenseunicorns/uds-core/issues/35)) ([8216ab9](https://github.com/defenseunicorns/uds-core/commit/8216ab982be79dc393a2e0db359370b32e660150))

## [0.2.0](https://github.com/defenseunicorns/uds-core/compare/v0.1.3...v0.2.0) (2023-11-13)


### Features

* add pepr capability for istio + jobs ([#12](https://github.com/defenseunicorns/uds-core/issues/12)) ([c32a703](https://github.com/defenseunicorns/uds-core/commit/c32a70390f443c90796978ad4c42bbb4b17eb226))
* embed tls certs in istio package ([#32](https://github.com/defenseunicorns/uds-core/issues/32)) ([fb04fee](https://github.com/defenseunicorns/uds-core/commit/fb04feec9657f449366389a0e0a474a8cdeecb2c))

## [0.1.3](https://github.com/defenseunicorns/uds-core/compare/v0.1.2...v0.1.3) (2023-11-10)


### Miscellaneous

* bump zarf & uds-k3d deps ([#30](https://github.com/defenseunicorns/uds-core/issues/30)) ([dd28ab3](https://github.com/defenseunicorns/uds-core/commit/dd28ab3acd163aaccdfb76fbf9726c02a2ff0050))

## [0.1.2](https://github.com/defenseunicorns/uds-core/compare/v0.1.1...v0.1.2) (2023-11-09)


### Miscellaneous

* fix missing deps in tag and release workflow ([#28](https://github.com/defenseunicorns/uds-core/issues/28)) ([1e1af76](https://github.com/defenseunicorns/uds-core/commit/1e1af762e8eb1dd331cbd681e48ecc95ec3184d2))

## [0.1.1](https://github.com/defenseunicorns/uds-core/compare/v0.1.0...v0.1.1) (2023-11-09)


### Features

* Add istio and preliminary ci ([#3](https://github.com/defenseunicorns/uds-core/issues/3)) ([fbd7453](https://github.com/defenseunicorns/uds-core/commit/fbd745392340dbc978b27f0d321f3375882c1c40))
* add prometheus-stack (monitoring) capability ([#2](https://github.com/defenseunicorns/uds-core/issues/2)) ([e438ab6](https://github.com/defenseunicorns/uds-core/commit/e438ab6089bc9d8c6640fa002285d38ddc3022df))
* release-please integration ([#25](https://github.com/defenseunicorns/uds-core/issues/25)) ([bf3c53b](https://github.com/defenseunicorns/uds-core/commit/bf3c53b2ddac4e02e31aa3429029dd9f1c9595e3))


### Bug Fixes

* complete incomplete deploy task ([#21](https://github.com/defenseunicorns/uds-core/issues/21)) ([45ff5e5](https://github.com/defenseunicorns/uds-core/commit/45ff5e5d7b6a50cdfcfabb174349ab539a8accd9))


### Miscellaneous

* add commit lint workflow ([#19](https://github.com/defenseunicorns/uds-core/issues/19)) ([776a632](https://github.com/defenseunicorns/uds-core/commit/776a6325821329b2cbd97da2f40a30447cd48efc))
* remove version from neuvector zarf.yaml ([#11](https://github.com/defenseunicorns/uds-core/issues/11)) ([fbc8d51](https://github.com/defenseunicorns/uds-core/commit/fbc8d51e2b4146d394184d7596cd9a54219dc001))
* update release please extra-files to be explicit ([#26](https://github.com/defenseunicorns/uds-core/issues/26)) ([23f4999](https://github.com/defenseunicorns/uds-core/commit/23f49995771fb05cd18e7a077bf90e86ca5b7471))

## [0.0.0] - YYYY-MM-DD
PRE RELEASE

### Added
- Initial CHANGELOG.md
- CODEOWNERS
- CONTRIBUTING.md
- DEVELOPMENT_MAINTENANCE.md
- LICENSE
- READEME.md
- zarf.yaml
