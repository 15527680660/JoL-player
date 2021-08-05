import { useReducer } from 'react';

export interface controlsVariableType<T = number, K = boolean> {
  /**
   * @description 音量键的值
   */
  volume: T;
  /**
   * @description 音量键的按钮切换
   */
  isMuted: K;
  /**
   * @description 是否可以滑动音量键
   */
  isSlideVolume: K;
  /**
   * @description 是否全屏
   */
  isScreentFull: K;
  /**
   * @description 倍数
   */
  multiple: T;
  /**
   * @description 是否网页全屏
   */
  isWebPageFullScreen: K;
}

export interface volumeActionType {
  type: 'volume';
  data: controlsVariableType['volume'];
}
export interface isMutedActionType {
  type: 'isMuted';
  data: controlsVariableType['isMuted'];
}
export interface isSlideVolumeActionType {
  type: 'isSlideVolume';
  data: controlsVariableType['isSlideVolume'];
}
export interface isScreentFullActionType {
  type: 'isScreentFull';
  data: controlsVariableType['isScreentFull'];
}
export interface multipleActionType {
  type: 'multiple';
  data: controlsVariableType['multiple'];
}
export interface isWebPageFullScreenActionType {
  type: 'isWebPageFullScreen';
  data: controlsVariableType['isWebPageFullScreen'];
}
export type mergeAction =
  | volumeActionType
  | isMutedActionType
  | isSlideVolumeActionType
  | isScreentFullActionType
  | multipleActionType
  | isWebPageFullScreenActionType;

export const useControls = () => {
  const initialState = {
    volume: 0,
    isMuted: false,
    isSlideVolume: false,
    isScreentFull: false,
    multiple: 1.0,
    isWebPageFullScreen: false,
  };

  const reducer = (state: controlsVariableType, action: mergeAction) => {
    switch (action.type) {
      case 'volume':
        return { ...state, volume: action.data };
      case 'isMuted':
        return { ...state, isMuted: action.data };
      case 'isSlideVolume':
        return { ...state, isSlideVolume: action.data };
      case 'isScreentFull':
        return { ...state, isScreentFull: action.data };
      case 'multiple':
        return { ...state, multiple: action.data };
      case 'isWebPageFullScreen':
        return { ...state, isWebPageFullScreen: action.data };
      default:
        return state;
    }
  };
  const [controlsState, dispatch] = useReducer(reducer, initialState);

  return { controlsState, dispatch };
};