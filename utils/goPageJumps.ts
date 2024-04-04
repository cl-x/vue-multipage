/*
 * @Author       : 桔子
 * @Date         : 2024-04-03 15:28:23
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-04 16:00:21
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/utils/goPageJumps.ts
 */
import { JumpType } from "@/const/index";
import { PAGE_URL } from "@/const/routerCenter";

// eslint-disable-next-line complexity
export const goPageJumps = (type: string, args: object = {}) => {
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
    case JumpType.BILL_HOME:
      goBillHome(args);
      break;
    default:
      break;
  }
};

export const goDetailHome = (args: object) => {
  window.location.href = `${PAGE_URL.DETAIL_HOME}`;
};

export const goPageOneEnter = (args: object) => {
  window.location.href = `${PAGE_URL.PAGEONE_ENTER}`;
};

export const goPageOneHome = (args: object) => {
  window.location.href = `${PAGE_URL.PAGETWO_HOME}`;
};

export const goBillHome = (args: object) => {
  window.location.href = `${PAGE_URL.BILL_HOME}`;
};
