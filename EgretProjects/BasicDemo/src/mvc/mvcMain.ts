class MainMvc extends moon.BasicView{
    protected render():void
    {
        this.stage.scaleMode=egret.StageScaleMode.FIXED_WIDTH;
        SoundControl.getIns().addItem("keyDown_mp3");
        
        var facade=puremvc.Facade.getInstance("calculator");
        //var moduleView:ModuleView=new ModuleView;
        var c:any=egret.getDefinitionByName("ModuleView");//通过名字得到类
        var moduleView:any=new c;
        var moduleMediator:ModuleMediator=new ModuleMediator(ModuleMediator.NAME,moduleView);
        this.addChild(moduleView);
        //注册主视窗控制
        facade.registerMediator(moduleMediator);

        //注册命令
        facade.registerCommand(MVCConst.CMD_START,StartCommand);
        //发收执行开始命令
        facade.sendNotification(MVCConst.CMD_START);
    }
}