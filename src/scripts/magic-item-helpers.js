import { isRealNumber } from "./lib/lib";

export class MagicItemHelpers {
  static isUsingNew5eSheet(sheet) {
    return sheet?.constructor?.name === "ActorSheet5eCharacter2";
  }

  static isMidiItemEffectWorkflowOn() {
    return (
      game.modules.get("midi-qol")?.active && game.settings.get("midi-qol", "ConfigSettings")?.autoItemEffects !== "off"
    );
  }

  static numeric = function (value, fallback) {
    // if ($.isNumeric(value)) {
    //   return parseInt(value);
    // } else {
    //   return fallback;
    // }
    // if is a number
    if (isRealNumber(value)) {
      return value;
    }
    // if is a string but with a numeric value
    else if (!isNaN(parseFloat(value)) && isFinite(value)) {
      return parseInt(value);
    }
    // if is something else
    else {
      return fallback;
    }
  };

  static localized = function (cfg) {
    return Object.keys(cfg).reduce((i18nCfg, key) => {
      i18nCfg[key] = game.i18n.localize(cfg[key]);
      return i18nCfg;
    }, {});
  };

  static getEntityNameWithBabele(entity) {
    if (game.modules.get("babele")?.active) {
      return game.babele && entity.getFlag("babele", "hasTranslation")
        ? entity.getFlag("babele", "originalName")
        : entity.name;
    } else {
      return entity.name;
    }
  }

  static getEntityNameCompendiumWithBabele(packToCheck, nameToCheck) {
    if (game.modules.get("babele")?.active) {
      if (packToCheck !== "world" && game.babele?.isTranslated(packToCheck)) {
        return game.babele.translateField("name", packToCheck, { name: nameToCheck });
      } else {
        return nameToCheck;
      }
    } else {
      return nameToCheck;
    }
  }

  static sortByName(a, b) {
    if (a.displayName < b.displayName) {
      return -1;
    }
    if (a.displayName > b.displayName) {
      return 1;
    }
    return 0;
  }

  static sortByLevel(a, b) {
    return a.level === b.level ? MagicItemHelpers.sortByName(a, b) : a.level - b.level;
  }
}
