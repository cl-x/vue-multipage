/*
 * @Author       : 桔子
 * @Date         : 2024-04-03 15:28:23
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-03 16:39:35
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/src/utils/goPageJumps.ts
 */
import { JumpType } from "@/const/index";
import { PAGE_URL, PAGE_ROOT } from "@/const/routerCenter";

// eslint-disable-next-line complexity
export const goPageJumps = (type: string, args: object = {}) => {
  console.log("window.location", window.location);
  switch (type) {
    case JumpType.DETAIL_HOME:
      goDetailHome(args);
      break;
    case JumpType.PAGEONE_ENTER:
      goPageOneEnter(args);
      break;
    case JumpType.PAGETWO_HOME:
      goPageOneHome(args);
      break;
    default:
      break;
  }
};

export const goDetailHome = (args: object) => {
  window.location.href = `${PAGE_URL.DETAIL_HOME}`;
};

export const goPageOneEnter = (args: object) => {
  console.log("argsgoPageOneEnter", args);
  window.location.href = `${PAGE_URL.PAGEONE_ENTER}`;
};

export const goPageOneHome = (args: object) => {
  window.location.href = `${PAGE_URL.PAGETWO_HOME}`;
};
