class MoonTest extends moon.MoonContainer
{
    protected panelMore:moon.PanelMoreManager;
    protected panelBar:moon.PanelBar;
    protected init():void
    {
        this.panelMore=new moon.PanelMoreManager();
        var names:string[]=[];
        names.push("moon纯代码组件一，基本按钮展示");
        names.push("moon纯代码组件二，进度条与滑动器展示");
        names.push("moon纯代码组件三，TIPS展示");
        //names.push("moon纯代码组件四， Scroll展示");
        for(var i=0;i<names.length;i++){
            var panel:moon.PanelBar=new moon.PanelBar();
            panel.label=names[i];
            panel.addEvent(moon.MoonEvent.RENDER_COMPLETE,this.onAddStage.bind(this));
            //panel.addItem(moon.MoonUI.getCircle(200,moon.Color.random,Math.random()*200,Math.random()*200))
            this.panelMore.addItem(panel);
        }
        this.panelMore.addEvent(moon.MoonEvent.START,this.start,this);
        this.panelMore.addEvent(moon.MoonEvent.OVER,this.over,this);
        this.addChild(this.panelMore);
        
        this.showButton(0);
        this.showProgresBar(1);
        this.showTipsBar(2);
        //this.showScrollBar(0);
        //this.panelMore.once(egret.Event.ADDED_TO_STAGE,this.addToStageMore,this);
        var bitmap:Bitmap=new Bitmap()
        bitmap.texture=RES.getRes("maomao_png");
        var h:number=bitmap.height;
        //bitmap.anchorOffsetY=bitmap.height>>1;
        bitmap.x=bitmap.y=400;
        bitmap.scaleY=-1;
        var tw:Tween=Tween.get(bitmap, {loop:true});
        tw.to({height:200},300).to({height:h},300);
        
        this.addChild(bitmap);
    }
    protected addToStageMore(e:egret.Event):void
    {
        this.panelMore.close();
    }
    protected start(e:moon.MoonEvent):void
    {
        //traceSimple("翻页开始");
    }
    protected over(e:moon.MoonEvent):void
    {
        //traceSimple("翻页结束");
    }
    protected onAddStage(e:moon.MoonEvent):void
    {
        var panel:moon.PanelBar=e.currentTarget as moon.PanelBar;
        panel.colorBottom=0XFCDF7C;
    }
    //------屏幕1-----
    protected showButton(index:number):void
    {
        var panel:moon.PanelBar=this.panelMore.getItem(index) as moon.PanelBar;
        //-----------
        var btn1:moon.BasicButton=new moon.BasicButton();
        btn1.label="默认皮肤按钮";
        panel.addItem(btn1,10,10);
        //-----------
        var normal:Sprite=moon.Skin.randomRect;
        var down:Sprite=moon.Skin.randomRect;
        var btn1:moon.BasicButton=new moon.BasicButton(normal,down);
        btn1.label="随机颜色皮肤按钮";
        panel.addItem(btn1,10,90);
        //-----------
        var normal:Sprite=moon.Skin.randomCircle;
        var down:Sprite=moon.Skin.randomCircle;
        var btn1:moon.BasicButton=new moon.BasicButton(normal,down);
        btn1.labelCircle="圆按钮";
        panel.addItem(btn1,100,220);
        //-----------
        var normal3:moon.Scale9Image=new moon.Scale9Image("btn1_png");
        var down3:moon.Scale9Image=new moon.Scale9Image("btn2_png");
        var btn1:moon.BasicButton=new moon.BasicButton(normal3,down3);
        btn1.label="外部加载的皮肤"
        panel.addItem(btn1,300,100);
        //---------
        var normal3:moon.Scale9Image=new moon.Scale9Image("btn1_png");
        var down3:moon.Scale9Image=new moon.Scale9Image("btn2_png");
        normal3.width=down3.width=280;
        normal3.height=down3.height=100;
        var btn1:moon.BasicButton=new moon.BasicButton(normal3,down3);
        btn1.skinAutoScale=false;//不自动改变大小
        btn1.label="外部加载的皮肤"
        panel.addItem(btn1,300,200);
        //-----------
        var normal:Sprite=moon.Skin.switchOn;
        var down:Sprite=moon.Skin.switchOn;
        var normal2:Sprite=moon.Skin.switchOff;
        var down2:Sprite=moon.Skin.switchOff;
        var btn4:moon.MoreSkinButton=new moon.MoreSkinButton([normal,down,normal2,down2]);
        btn4.toggleSwitch=true;
        panel.addItem(new moon.Label("toggleSwitch按钮",0),10,300);
        panel.addItem(btn4,10,340);
        //-----------
        var items:any[]=["我帅","我很帅","我双酷双帅","我帅得惊动上帝"];
        var radioButton:moon.RadioButtonBar=new moon.RadioButtonBar;
        for(var i:number=0;i<items.length;i++){
            radioButton.addItemLabel(items[i]);
        }
        radioButton.layout();
        panel.addItem(new moon.Label("单选框按钮",0),10,500);
        panel.addItem(radioButton,10,540);
        radioButton.addEvent(moon.MoonEvent.CHANGE,onHandlerRadion.bind(this));
        function onHandlerRadion(e:moon.MoonEvent):void
        {
            moon.TipsManager.getIns().simpleTips("选择了"+radioButton.selectIndex,new Point(150,550))
        }
        //-------------------
        var items:any[]=["A","B","C","D"];
        var radioButton:moon.RadioButtonBar=new moon.RadioButtonBar;
        for(var i:number=0;i<items.length;i++){
            radioButton.addItemLabel(items[i]);
        }
        radioButton.layout(moon.Const.HORIZONTAL,100);
        panel.addItem(new moon.Label("单选框按钮横排版",0),10,800);
        panel.addItem(radioButton,10,840);
        //-----------
        var items:any[]=["我帅","我很帅","我双酷双帅","我帅得惊动上帝"];
        var checkBox:moon.CheckBoxBar=new moon.CheckBoxBar;
        var len:number=items.length;
        for(var i:number=0;i<len;i++){
             checkBox.addItemLabel(items[i]);
        }
        checkBox.layout();
        panel.addItem(new moon.Label("复选框按钮",0),300,500);
        panel.addItem(checkBox,300,540);
        checkBox.addEvent(moon.MoonEvent.CHANGE,onHandlerCheckBox,this);
        function onHandlerCheckBox(e:moon.MoonEvent):void
        {
            moon.TipsManager.getIns().simpleTips("选择了"+checkBox.selectIndexs,new Point(300,550))
        }

    }
    //------屏幕2-----
    protected showProgresBar(index:number):void
    {
        
        var panel:moon.PanelBar=this.panelMore.getItem(index) as moon.PanelBar;
        //------默认皮肤-----
        var progressBar:moon.ProgressBar=new moon.ProgressBar();
        progressBar.value=0.5;
        panel.addItem(progressBar,50,300);
        var v:string=Math.round(progressBar.value*100)+"%";
        progressBar.showText(v,-1,-40);
        //------随机颜色皮肤-----
        var width=400;
        var height=30;
        var skinOut:Sprite=moon.MoonUI.getRect(width,height,moon.Color.random);
        var skinIn:Sprite=moon.MoonUI.getRect(width,height,moon.Color.random);
        var progressBar:moon.ProgressBar=new moon.ProgressBar(skinOut,skinIn);
        panel.addItem(progressBar,100,50);
        // egret.Ticker.getInstance().register(function loop(){
        //     progressBar.value+=0.002;
        //     progressBar.value=progressBar.value>=1?0:progressBar.value;
        //     var v:string=Math.round(progressBar.value*100)+"%";
        //     progressBar.showText(v);
        // }, this);
        //----------------------
        var sliderBar:moon.SliderBar=new moon.SliderBar();
        panel.addItem(sliderBar,300,500);
        sliderBar.value=0.2;
        sliderBar.addEvent(moon.MoonEvent.START,onStartOver,this);
        sliderBar.addEvent(moon.MoonEvent.MOVE,onStartOver,this);
        sliderBar.addEvent(moon.MoonEvent.OVER,onStartOver,this);

        var sliderBar:moon.SliderBar=new moon.SliderBar();
        panel.addItem(sliderBar,50,650);
        sliderBar.layout(moon.Const.VERTICAL);
        sliderBar.value=0.2;
       
        
        function onStartOver(e:moon.MoonEvent):void
        {
            if(e.type==moon.MoonEvent.START){
                this.panelMore.close();
            }else if(e.type==moon.MoonEvent.MOVE){

            }else{
                this.panelMore.open();
            }
        }
    }
    //------屏幕3-----
    protected showTipsBar(index:number):void
    {
        var panel:moon.PanelBar=this.panelMore.getItem(index) as moon.PanelBar;
        var xNum:number=2;
        var dis:number=500;
        panel.addItem(new moon.Label("单击按钮显示TIPS，TIPS显示始终都在屏幕内",0),10,100);
        for(var i:number=0;i<6;i++){
            var btn:moon.BasicButton=new moon.BasicButton();
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,onTouch,this)
            btn.label="单击显示TIPS"+i;
            var x:number=Math.floor(i%xNum)*dis;
            var y:number=Math.floor(i/xNum)*dis;
            panel.addItem(btn,x,y);
        }
        function onTouch(e:egret.TouchEvent):void
        {
            var btn:moon.BasicButton=e.currentTarget as moon.BasicButton; 
            moon.TipsManager.getIns().simpleTips(btn.label,new Point(e.stageX,e.stageY));
        }
    }
    //------屏幕4-----
    protected showScrollBar(index:number):void
    {
        var panel:moon.PanelBar=this.panelMore.getItem(index) as moon.PanelBar;

        var scrollBar:moon.ScrollBar=new moon.ScrollBar();
        var bitmap:moon.Scale9Image=new moon.Scale9Image("bg_jpg");
        scrollBar.target=bitmap;
        scrollBar.setSize(400,400);
		scrollBar.layout(moon.Const.VERTICAL);
        this.addChild(scrollBar);
        scrollBar.x=scrollBar.y=100;

        var scrollBar:moon.ScrollBar=new moon.ScrollBar();
        var bitmap:moon.Scale9Image=new moon.Scale9Image("bg_jpg");
        scrollBar.target=bitmap;
        scrollBar.setSize(400,400);
        scrollBar.layout(moon.Const.HORIZONTAL);
        this.addChild(scrollBar);
        scrollBar.x=100;
        scrollBar.y=550;
    }
    
}