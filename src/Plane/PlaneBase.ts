// 飞机抽象类

abstract class PlaneBase extends egret.DisplayObjectContainer{
  // 飞机护甲
  public abstract life: number;

  // 发射子弹方法
  public abstract emitBullet(bullet: BulletBase): void;

  // 记录位置

  public abstract setDistance(stageInfo:IStageInfo):void;

  // 飞机移动
  public abstract move (point: IStageInfo): void;

  // 飞机爆炸
  public abstract explode (): void;

  // 飞机速度
  public abstract speed: number;

  // 飞机状态
  public state: PlaneState = PlaneState.existing;
  public abstract reset():void;

}
