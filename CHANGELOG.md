### 4.1.4
* Bugfix to bug introduced in 4.1.3

### 4.1.3
#### Features
* Make Spell Components and Feature Action Type visible in Features list/Spellbook [#88]
* Add a possibility of not scaling spell damage (like acid splash/firebolt) [#73]

#### Bugfixes
* Fix babele being accessed when it's packs object wasn't yet initialized [#99]

### 4.1.2.1
- Github workflow fixes

### 4.1.2
* little bug fixing on the vite config and the pack utils
* Adjust midi-qol effect apply method

### 4.1.1
- Enable compatibility with D&D5e 3.1+

### 4.1.0
#### Bugfixes
* Tidy 5e styling fixes to make drag-drop field extend until the end of the tab. - thx @kgar 
* Removal of redundant code about activeEffect launch from Spells
* Migration of internal pack link to `magicitems` instead of `magic-items-2`
* Pack update to feature the v10 foundry dataset `system` instead of `data`
* Allow Spells/Feats added to feats to circumvent the "Only Identified" setting

#### Features
* Auto publish to FoundryVTT Github action
* New API method to allow compendium migrations from Magic Items 2 to Magic Items - details below


### Magic Items 4.0
- Migration to "magicitems" module-id

---
### 1.7.3 - ℹ️ - Last "Magic Items 2" version pre-migration to other module-id
- Message about migrations

### 1.7.2 
- Update pt-BR.json by @Kharmans in https://github.com/PwQt/magic-items-2/pull/87
- Null exception for 1.7.1 bugfix
  
### 1.7.1
- Do not show the _custom_ Apply Effect box whenever DFreds Convenient Effects automatization is enabled in Midi-Qol settings - #84 
- Polish and Spanish translation updates

### 1.7.0
- [BREAKING CHANGES] Many bug fixing and some not retrocompatibility changes by @p4535992 in #82
- Fix to packs
- Drop support for pre-3.0 version of D&D module

### 1.6.3.1
- Translations update (Spanish)

### 1.6.3
- [#71] Tidy Wire-up Console Errors Fix by @kgar

### 1.6.2

- Brazilian Portuguese Translation by @Kharmans in https://github.com/PwQt/magic-items-2/pull/68
- 63 bug effect not applying on a token from magic item spell by @PwQt in https://github.com/PwQt/magic-items-2/pull/69

### 1.6.1.1
- Actor API hotfix
- localization fixes

### 1.6.1
- Incorrect Tidy5e actor loading fix by @voodoofrog
- Started work on Polish localization of the module

### 1.6.0
- D&D 3.0 compatibility

### 1.5.2
- Mark the module as not compatible with DND5e 3.0

### 1.5.1
- Permission fix for spells on Character/Magic Item sheet by @PwQt in https://github.com/PwQt/magic-items-2/pull/49

### 1.5.0
- Tidy Compatibility, Refactors, Bugfixes by @kgar in https://github.com/PwQt/magic-items-2/pull/46

### 1.4.7
- add some helpers by @p4535992 in https://github.com/PwQt/magic-items-2/pull/42
- #44 fix to sortByLevel helper by @PwQt in https://github.com/PwQt/magic-items-2/pull/45

### 1.4.6
- Bug fix: https://github.com/PwQt/magic-items-2/issues/40, Updates `hack` function to support varying numbers of parent Item Sheet classes by @kgar in https://github.com/PwQt/magic-items-2/pull/41

### 1.4.5

- Bug fix: https://github.com/PwQt/magic-items-2/issues/22, by using the patch suggested from @david-simoes-93 on https://github.com/PwQt/magic-items-2/issues/38


### 1.4.2-3-4

- Bug fix https://github.com/PwQt/magic-items-2/issues/33

### 1.4.0-1

### 1.3.4

- Add uuid property to the magic items flags
- Update configurations files for a better management of the code
- Some minor bug fixes
- Separated the various custom magic item implementations classes into separate javascript files to make it more readable to other developers following the standard patterns used by other developers in large projects...

### 1.3.3
- Allow all to dragdrop into the magic-item-tab #24 by @PwQt in #26

### 1.3.2
- Arbons summoning compatibility by @PwQt in #15
- Add check if chatData exists on item rolls by @PwQt in #16 (thanks tposney for creating the issue)
- revert back the mandatory use of only Foundry v11

### 1.3.1
- github worker permission fixes

### 1.3.0
- Code base modifications

### 1.2.2
- Items showing twice in chat fix
- Spells disappear from list fix

### 1.2.1
- module.json updates

### 1.2.0
- modification to soon-to-be-deprecated Item5e#roll method

### 1.1.0
- in-foundry module configuration fixes, so that they are defined for "Magic Items 2" tab instead of "undefined"
- verified compability with v11

### 1.0.0 Forking the code of original Magic Items with additional fixes:
- update module.json to not use deprecated 'entity',
- merge request 33 - minor fix to add item to hotbar
- 5eTidy sheet integration based on merge request 25
- merge request 34 - icons in compendium fix

