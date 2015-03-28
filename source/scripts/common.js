// JavaScript Document
//alert("hello world");

//能力分类
var _Ability = Array
(
"【执行】"
,"【计算机运用】"
,"【校对、编辑】"
,"【持续记录】"
,"【多语言】"
,"【机械使用】"
,"【评测与检查】"
,"【资料收集】"
,"【归类】"
,"【观察】"
,"【提取概念】"
,"【处理数字】"
,"【分析】"
,"【评估】"
,"【归纳总结】"
,"【创意】"
,"【临场发挥】"
,"【快速适应】"
,"【多任务管理】"
,"【团队合作】"
,"【情绪管理】"
,"【时间管理】"
,"【审美能力】"
,"【计划、组织】"
,"【预算】"
,"【监控推进】"
,"【授权】"
,"【事务管理】"
,"【销售】"
,"【教导指点】"
,"【人际沟通】"
,"【谈判协商】"
,"【客户服务】"
,"【写作】"
,"【视觉化表达】"
,"【表演、演说】"
,"【艺术特长】"
,"【咨询与顾问】"
,"【预见】"
,"【处理模糊问题】"
,"【决策】"
,"【领导力】"
);

//能力分类说明
var _AbilityDetail = Array
(
"根据制度、规定或计划采取准确的行动"
,"运用软件，如Microsoft Word，Excel，PPT等，推进、完成任务和项目"
,"组织、整理、审定书面材料，检查其中的词汇、句法使用和体裁是否正确，并做出改进"
,"通过日志、流水账或表格等方法保持信息的更新"
,"熟练使用英语或其他外语进行书面及口头交流"
,"装配、调试、修理和使用机械"
,"对熟练程度、质量或有效性再三进行仔细检查"
,"通过书面或互联网有效地收集、组织信息和数据，以获取关注的信息"
,"为人、事、数据或资料分组、归类，使之成系统"
,"以科学的方法研究、检查、监测数据、人或事"
,"从问题、数据、现象中提炼出新的概念与观点"
,"轻松使用计算、推理、编组等方法理解并解决数字、数量等相关问题。"
,"用合乎逻辑的方法分解并解决问题"
,"对价值或成本进行评定或评价质量与可行性。如房地产评估。"
,"整合概念和信息，使不同的元素形成系统的整体"
,"通过思考、构想、遐想和头脑风暴的的方法产生新的想法、获得新的结果"
,"在无准备的情况下有效的思考、演说或行动"
,"轻松且快速地适应工作任务与环境的变化"
,"协调多个并发任务，并有效执行"
,"易于与他人合作以实现共同目标"
,"善于管理自己的情绪，能运用恰当的方法宣泄情绪；善于倾听、接纳他人；可以控制愤怒、保持冷静；有适时的幽默感；懂得感激"
,"确定任务的优先顺序，做好安排，保证任务的及时完成"
,"感受美、鉴赏美、表现美、创造美的能力"
,"确定不同阶段项目目标，制定日程计划并推进"
,"估算所需要的投入并制定更经济、更有效地使用金钱或资源的计划"
,"跟踪了解事态进展与发展趋势，加速生产或服务，寻找问题排除故障，使流程更加顺畅"
,"通过将任务分配给其他人的方式取得有效成果"
,"制定或优化企业规章制度和各项标准，并保证流程顺利运营，使组织效率最大化。"
,"使客户确信个人、公司、产品或服务的价值，增加销售金额"
,"通过教导并指点学生、员工、下级或客户，促进其领悟与成长"
,"能有效、明确地表达及解读成员的信息，可以在集体中充当联络人角色，并能处理矛盾，化解冲突"
,"为保障权利和利益，通过谈判协商达成一致意见"
,"有效地解决顾客提出的问题，应对顾客投诉，最终使顾客满意"
,"撰写报告、信件、文章、广告、故事或教材"
,"运用一定的审美观念、表现手法及专业工具将某种构想或计划视觉化或形象化"
,"为他人进行演唱、舞蹈、演奏、小品等艺术表演，或在大众面前阐述观点或演讲"
,"音乐、美术、舞蹈、摄影等"
,"根据对方的问题与需求，提出恰当的解决方案。"
,"根据直觉、经验或资料预先料到事物的变化结果"
,"轻松高效地处理缺乏清晰性、结构性和确定性的问题。"
,"对重大、复杂或常见的问题做出决定"
,"激励他人，发挥影响力改变现状，运用领导力引导新的方向"
);

//意愿程度测试结果存储
var _WillResult = Array(_Ability.length);

//擅长程度测试结果存储
var _TalentResult = Array(_Ability.length);

//答案汇总
var _QuesResult = Array(_WillResult, _TalentResult);

//意愿程度选项
var _WillOpt = Array
(
"A.很愿意使用",
"B.比较愿意使用",
"C.不大愿意使用",
"D.很不愿意使用"	
);

//擅长程度选项
var _TalentOpt = Array
(
"1.非常擅长",
"2.比较擅长",
"3.有些费力",
"4.不能胜任"
);

//选项汇总
var _QuesOpt = Array(_WillOpt, _TalentOpt);

//测试类型定义
var _TypeWill = 0; 
var _TypeTalent = 1;

//当前测试类型：意愿程度还是擅长程度
var _CurTestType = _TypeWill;

//当前问题序号
var _CurQuesNum = 0;

//问题显示（quesArea）区的宽度
var _QuesAreaWidth;

//问题显示（quesArea）区的元素对象
var _QuesDiv;

//定义数组获取最值的方法
Array.prototype.max = function(){
  return Math.max.apply({},this)
}
Array.prototype.min = function(){
  return Math.min.apply({},this)
}

//div自适应高度(任意参数)
function SetSameHeight() 
{
	var hArray = Array();
	var argArray = Array();
	var argLength;

	//获取参数
	argLength = arguments.length;
	for(var i = 0; i < argLength; i++)
	{
		argArray[i] = arguments[i];
	}

	//获取对象的高度
	for(var i = 0; i < argLength; i++)
	{
		hArray.push($(argArray[i]).height());
	}

    //获取最大值
    var mh = hArray.max(); 

    //重设高度，让div高度保持一至
	for(var i = 0; i < argLength; i++)
	{
		$(argArray[i]).height(mh); 
	}
} 

//设置问题内容
function SetQuesContent(quesNum, testType)
{
	var quesTitle = document.getElementById("quesTitle");
	quesTitle.textContent = _Ability[quesNum] + _AbilityDetail[quesNum];
	
	for(var i = 0; i < 4; i++)
	{
		var li = document.getElementById("quesOpt" + i);	
		li.textContent = _QuesOpt[testType][i];
	}
}



window.onload = function(){
	$("#testPage").hide();
	$("#resultPage").hide();
}

//设置QuesDiv不换行，防止切换过程中文字折叠
function SetQuesDivNoWrap()
{
	_QuesDiv.style.whiteSpace = "nowrap";
}

//QuesDiv恢复换行
function SetQuesDivWrap()
{
	_QuesDiv.style.whiteSpace = "normal";
}


function QuesAreaInit()
{
	$("#testPage").show();
	_DivToIn = document.getElementById("ques");
	
	_QuesDiv = document.getElementById("quesArea");
	_QuesAreaWidth = $("#quesArea").width();
}

//切换问题
function ChangeQues()
{
	//保存选择结果
	var radioValue = $("input[name='opt']:checked").val();
	_QuesResult[_CurTestType][_CurQuesNum] = _QuesOpt[_CurTestType][radioValue];
	
	//更改问题内容
	_CurQuesNum++;

	if(_CurQuesNum == _Ability.length)
	//f(1)
	{
		if(_CurTestType == _TypeWill)
		//if(0)
		{
			_CurQuesNum = 0;
			_CurTestType = _TypeTalent;
		}
		else
		{
			//触发显示结果事件
			var pro = document.getElementById("progress-bar");
			pro.style.width = "100%";

			$("#testPage").hide();
			$("#testPage").trigger("dispResult");
			return;
		}
	}

	SetQuesContent(_CurQuesNum, _CurTestType);

	//更新进度条
	var prog = (_CurQuesNum + _Ability.length * _CurTestType) * 100/ (_Ability.length * 2);
	var pro = document.getElementById("progress-bar");
	pro.style.width = prog + "%";

	//去掉radio的选中状态
	$("input[name='opt']:checked").removeAttr("checked");

	//移动div切换问题
	_DivToIn.style.marginLeft = _QuesAreaWidth + "px";//设置位置

	SetQuesDivNoWrap();
  	 $("#ques").animate({marginLeft:"0px"},500);
	setTimeout(SetQuesDivWrap, 500);
}

//响应问题选项的radio
$(document).ready(function(){
$("input[type='radio']").change(function(){

	//加个延时防止切换速度太快，看不到选中项
	setTimeout(ChangeQues, 60);
  	
}); 
});

//响应登录按钮
$(document).ready(function(){
$("#btnLongin").click(function(){

	var text = $("#textLogin").val();

	if(text == "123456")
	{
		//隐藏登录页
		$("#loginPage").hide();

		//显示测试页
		QuesAreaInit();
	}
	else
	{
		alert("测试码有误！");
	}
}); 
});


//把数组内容存放在无序列表
function ArrayToUl(arr)
{
	var myUl = new Object();
	myUl = document.createElement("ul");

	for(var i = 0; i < arr.length; i++)
	{	
		var myLi;

		myLi = document.createElement("li");
		myLi.innerHTML = arr[i];
		myUl.appendChild(myLi);
	}

	return myUl;
}

//获取结果表格的内容
//num:0-15 代表分别结果表格的16个格子
function GetResultArr(num)
{
	var arr = new Array();

	for(var i = 0; i < _Ability.length; i++)
	{
		if((_QuesResult[_TypeWill][i] == _WillOpt[num % 4])&&
			(_QuesResult[_TypeTalent][i] == _TalentOpt[parseInt(num / 4)]))
		{
			arr.push(_Ability[i]);
		}
	}

	return arr;
}

//填写结果到表格
function FillResultTable()
{
	$(".resultTable td").each(function(unitIndex){
		var arr = Array();
		var myUl;

		arr = GetResultArr(unitIndex);
		if(arr.height != 0)
		{
			myUl = ArrayToUl(arr);
			$(this).append(myUl);
		}

	});
}

//获取能理区表格的内容
//num:0-3 代表分别能力区表格的4个格子
function GetAbilitytArr(tableIndex, num)
{
	var arr = new Array();

	//获取标题内容
	var willOpt = $(".abilityTable" + tableIndex + " .willTitle th")[num].innerHTML;
	var talentOpt = $(".abilityTable" + tableIndex + " .talentTitle th")[num].innerHTML;

	//根据标题设置对应的能力
	for(var i = 0; i < _Ability.length; i++)
	{
		if((_QuesResult[_TypeWill][i] == willOpt)&&
			(_QuesResult[_TypeTalent][i] == talentOpt))
		{
			arr.push(_Ability[i]);
		}
	}

	return arr;
}


//填写结果到能力区1
function FillAbilityTable(tableIndex)
{
	$(".abilityTable" + tableIndex + " .trAbility td").each(function(unitIndex){
		var arr = Array();
		var myUl;

		arr = GetAbilitytArr(tableIndex, unitIndex);
		if(arr.height != 0)
		{
			myUl = ArrayToUl(arr);
			$(this).append(myUl);
		}

	});
}


//进入结果显示界面
$("#testPage").bind("dispResult", function(){

	//fill结果表格
	FillResultTable();

	//fill能力区表格
	for(var i = 1; i < 5; i++) 
	{
		FillAbilityTable(i);
	}

	$("#resultPage").show();
});