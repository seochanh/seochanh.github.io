---
layout: post
title: '[CSS,JavaScript] Hex코드(16진수)와 투명도'
tags: [css, javascript]
# image: '/images/posts/8.jpg'
---

<style type='text/css'>
  .wrap { font-size: 14px; line-height: 1.3; display: flex; flex-wrap: wrap; color: #000; }
  [class*="box"] { display: flex; width: 20%; height: 50px; }
  [class*="hex"],[class*="rgb"] { flex: auto; display: flex; text-align: center; justify-content: center; align-items: center; }
  .box0 { width:100%; }
</style>

1. 혹시 몰라서 찾아봤는데 아니나 다를까 IE에서는 사용할 수 없습니다. [(Can I Use)](https://caniuse.com/#search=rrggbbaa)
2. 상단표는 같은 투명도를 가지는 Hex코드(rrggbbaa)의 aa값와 RGBA코드의 A값을 순서대로 나열한 것입니다.
3. 상단표에 빠져있는 Hex코드도 사용할 수 있습니다. (소수점을 가지는 투명도)

<div class="wrap">
  <div class="box0"><div class="hex0">0</div><div class="rgb0">0</div></div>
  <div class="box1"><div class="hex1">1</div><div class="rgb1">1</div></div>
  <div class="box2"><div class="hex2">2</div><div class="rgb2">2</div></div>
  <div class="box3"><div class="hex3">3</div><div class="rgb3">3</div></div>
  <div class="box4"><div class="hex4">4</div><div class="rgb4">4</div></div>
  <div class="box5"><div class="hex5">5</div><div class="rgb5">5</div></div>
  <div class="box6"><div class="hex6">6</div><div class="rgb6">6</div></div>
  <div class="box7"><div class="hex7">7</div><div class="rgb7">7</div></div>
  <div class="box8"><div class="hex8">8</div><div class="rgb8">8</div></div>
  <div class="box9"><div class="hex9">9</div><div class="rgb9">9</div></div>
  <div class="box10"><div class="hex10">10</div><div class="rgb10">10</div></div>
  <div class="box11"><div class="hex11">11</div><div class="rgb11">11</div></div>
  <div class="box12"><div class="hex12">12</div><div class="rgb12">12</div></div>
  <div class="box13"><div class="hex13">13</div><div class="rgb13">13</div></div>
  <div class="box14"><div class="hex14">14</div><div class="rgb14">14</div></div>
  <div class="box15"><div class="hex15">15</div><div class="rgb15">15</div></div>
  <div class="box16"><div class="hex16">16</div><div class="rgb16">16</div></div>
  <div class="box17"><div class="hex17">17</div><div class="rgb17">17</div></div>
  <div class="box18"><div class="hex18">18</div><div class="rgb18">18</div></div>
  <div class="box19"><div class="hex19">19</div><div class="rgb19">19</div></div>
  <div class="box20"><div class="hex20">20</div><div class="rgb20">20</div></div>
  <div class="box21"><div class="hex21">21</div><div class="rgb21">21</div></div>
  <div class="box22"><div class="hex22">22</div><div class="rgb22">22</div></div>
  <div class="box23"><div class="hex23">23</div><div class="rgb23">23</div></div>
  <div class="box24"><div class="hex24">24</div><div class="rgb24">24</div></div>
  <div class="box25"><div class="hex25">25</div><div class="rgb25">25</div></div>
  <div class="box26"><div class="hex26">26</div><div class="rgb26">26</div></div>
  <div class="box27"><div class="hex27">27</div><div class="rgb27">27</div></div>
  <div class="box28"><div class="hex28">28</div><div class="rgb28">28</div></div>
  <div class="box29"><div class="hex29">29</div><div class="rgb29">29</div></div>
  <div class="box30"><div class="hex30">30</div><div class="rgb30">30</div></div>
  <div class="box31"><div class="hex31">31</div><div class="rgb31">31</div></div>
  <div class="box32"><div class="hex32">32</div><div class="rgb32">32</div></div>
  <div class="box33"><div class="hex33">33</div><div class="rgb33">33</div></div>
  <div class="box34"><div class="hex34">34</div><div class="rgb34">34</div></div>
  <div class="box35"><div class="hex35">35</div><div class="rgb35">35</div></div>
  <div class="box36"><div class="hex36">36</div><div class="rgb36">36</div></div>
  <div class="box37"><div class="hex37">37</div><div class="rgb37">37</div></div>
  <div class="box38"><div class="hex38">38</div><div class="rgb38">38</div></div>
  <div class="box39"><div class="hex39">39</div><div class="rgb39">39</div></div>
  <div class="box40"><div class="hex40">40</div><div class="rgb40">40</div></div>
  <div class="box41"><div class="hex41">41</div><div class="rgb41">41</div></div>
  <div class="box42"><div class="hex42">42</div><div class="rgb42">42</div></div>
  <div class="box43"><div class="hex43">43</div><div class="rgb43">43</div></div>
  <div class="box44"><div class="hex44">44</div><div class="rgb44">44</div></div>
  <div class="box45"><div class="hex45">45</div><div class="rgb45">45</div></div>
  <div class="box46"><div class="hex46">46</div><div class="rgb46">46</div></div>
  <div class="box47"><div class="hex47">47</div><div class="rgb47">47</div></div>
  <div class="box48"><div class="hex48">48</div><div class="rgb48">48</div></div>
  <div class="box49"><div class="hex49">49</div><div class="rgb49">49</div></div>
  <div class="box50"><div class="hex50">50</div><div class="rgb50">50</div></div>
  <div class="box51"><div class="hex51">51</div><div class="rgb51">51</div></div>
  <div class="box52"><div class="hex52">52</div><div class="rgb52">52</div></div>
  <div class="box53"><div class="hex53">53</div><div class="rgb53">53</div></div>
  <div class="box54"><div class="hex54">54</div><div class="rgb54">54</div></div>
  <div class="box55"><div class="hex55">55</div><div class="rgb55">55</div></div>
  <div class="box56"><div class="hex56">56</div><div class="rgb56">56</div></div>
  <div class="box57"><div class="hex57">57</div><div class="rgb57">57</div></div>
  <div class="box58"><div class="hex58">58</div><div class="rgb58">58</div></div>
  <div class="box59"><div class="hex59">59</div><div class="rgb59">59</div></div>
  <div class="box60"><div class="hex60">60</div><div class="rgb60">60</div></div>
  <div class="box61"><div class="hex61">61</div><div class="rgb61">61</div></div>
  <div class="box62"><div class="hex62">62</div><div class="rgb62">62</div></div>
  <div class="box63"><div class="hex63">63</div><div class="rgb63">63</div></div>
  <div class="box64"><div class="hex64">64</div><div class="rgb64">64</div></div>
  <div class="box65"><div class="hex65">65</div><div class="rgb65">65</div></div>
  <div class="box66"><div class="hex66">66</div><div class="rgb66">66</div></div>
  <div class="box67"><div class="hex67">67</div><div class="rgb67">67</div></div>
  <div class="box68"><div class="hex68">68</div><div class="rgb68">68</div></div>
  <div class="box69"><div class="hex69">69</div><div class="rgb69">69</div></div>
  <div class="box70"><div class="hex70">70</div><div class="rgb70">70</div></div>
  <div class="box71"><div class="hex71">71</div><div class="rgb71">71</div></div>
  <div class="box72"><div class="hex72">72</div><div class="rgb72">72</div></div>
  <div class="box73"><div class="hex73">73</div><div class="rgb73">73</div></div>
  <div class="box74"><div class="hex74">74</div><div class="rgb74">74</div></div>
  <div class="box75"><div class="hex75">75</div><div class="rgb75">75</div></div>
  <div class="box76"><div class="hex76">76</div><div class="rgb76">76</div></div>
  <div class="box77"><div class="hex77">77</div><div class="rgb77">77</div></div>
  <div class="box78"><div class="hex78">78</div><div class="rgb78">78</div></div>
  <div class="box79"><div class="hex79">79</div><div class="rgb79">79</div></div>
  <div class="box80"><div class="hex80">80</div><div class="rgb80">80</div></div>
  <div class="box81"><div class="hex81">81</div><div class="rgb81">81</div></div>
  <div class="box82"><div class="hex82">82</div><div class="rgb82">82</div></div>
  <div class="box83"><div class="hex83">83</div><div class="rgb83">83</div></div>
  <div class="box84"><div class="hex84">84</div><div class="rgb84">84</div></div>
  <div class="box85"><div class="hex85">85</div><div class="rgb85">85</div></div>
  <div class="box86"><div class="hex86">86</div><div class="rgb86">86</div></div>
  <div class="box87"><div class="hex87">87</div><div class="rgb87">87</div></div>
  <div class="box88"><div class="hex88">88</div><div class="rgb88">88</div></div>
  <div class="box89"><div class="hex89">89</div><div class="rgb89">89</div></div>
  <div class="box90"><div class="hex90">90</div><div class="rgb90">90</div></div>
  <div class="box91"><div class="hex91">91</div><div class="rgb91">91</div></div>
  <div class="box92"><div class="hex92">92</div><div class="rgb92">92</div></div>
  <div class="box93"><div class="hex93">93</div><div class="rgb93">93</div></div>
  <div class="box94"><div class="hex94">94</div><div class="rgb94">94</div></div>
  <div class="box95"><div class="hex95">95</div><div class="rgb95">95</div></div>
  <div class="box96"><div class="hex96">96</div><div class="rgb96">96</div></div>
  <div class="box97"><div class="hex97">97</div><div class="rgb97">97</div></div>
  <div class="box98"><div class="hex98">98</div><div class="rgb98">98</div></div>
  <div class="box99"><div class="hex99">99</div><div class="rgb99">99</div></div>
  <div class="box100"><div class="hex100">100</div><div class="rgb100">100</div></div>
</div>



***

코딩을 하다가 CSS에서 Hex코드(#rrggbbaa)로도 투명도를 설정할 수 있다는 것을 알게 되었습니다. Hex는 16진수인데 어떻게 %로 변환해서 사용하는지 궁금했습니다. 변환 방법을 구글에서 찾아보다가 [한 사이트](https://stackoverflow.com/questions/5445085/understanding-colors-on-android-six-characters/11019879#11019879)에서 유사한 내용을 발견했습니다. 255에 백분율을 곱해서 16진수로 변환하면 될 것 같았고 이를 실제 검증해보기로 했습니다. (소수점은 반올림)
> 검증은 백분율로 투명도를 나타내는 RGBA와 비교해보는 것으로 진행했습니다. 상단의 표가 그 내용이며 많은 시행착오 끝에 Hex코드로도 RGBA와 동일한 투명도 값을 얻을 수 있다는 것을 확인했습니다.

div 박스에 CSS 속성을 줘서 확인을 해보려다가 Hex 100개, RGBA 100개를 언제 다 주나 싶어서 요즘 공부하고 있는 javascript의 반복문을 사용하면 되겠다 싶어서 해보기로 했습니다.

<br>

# 코드 리뷰

#### html
```html
<!-- div.box$*100>div.hex{$}+div.rgb{$} -->

<div class="box0">
  <div class="hex0">0</div>
  <div class="rgb0">0</div>
</div>
<div class="box1">
  <div class="hex1">1</div>
  <div class="rgb1">1</div>
</div>
...
<div class="box100">
  <div class="hex100">1</div>
  <div class="rgb100">1</div>
</div>
```
html 구조는 emmet을 이용해 쉽게 만들었습니다.

<br>

#### Box Color
```javascript
// HEX color
for(let i = 0; i <= 100; i++){
  let hex = document.getElementsByClassName(`hex${i}`);
  for(let j = 0; j < hex.length; j++){
    let num = Math.round(255/100*i);
    let hexNum = decimalToHex(num, 2);
    hex[j].style.backgroundColor = `#000000${hexNum}`;
  }
}

// RGB color
for(let i = 0; i <= 100; i++){
  let rgb = document.getElementsByClassName(`rgb${i}`);
  for(let j = 0; j < rgb.length; j++){
    rgb[j].style.backgroundColor = `rgba(0,0,0,${i/100}`;
  }
}
```

첫째로 어려웠던 부분은 Element를 불러오는 것이었습니다. 반복문을 이용해 색상의 값를 나열하는 것은 성공했는데 Element에 적용을 하지 못해서 오랜 시간 헤맸습니다. 검색을 통해 [필요한 내용](https://jhmocu.tistory.com/102)을 찾아서 코드 작성에 성공했습니다. 하지만 알고보니 현재 상황에서 그렇게 좋은 코드는 아니었습니다. class의 인덱스에 대해 이해하지 못하고 코드를 짜다보니 한 개의 변수(j) 쓸데없이 만들어야 했고 코드도 길어졌습니다.

> javascript에서 document.getElementsByClassName은 인덱스까지 불러온다는 사실을 나중에 알았습니다. 그 인덱스는 class의 순번입니다.
1. class 대신 id를 사용하여 document.getElementById를 쓰거나
2. class 네임을 'hex'와 'rgb'로 통일하고 인덱스를 작성해도 됩니다.
3. 현재는 class 네임이 다 다르기 때문에 인덱스를 반복문을 쓰지 않고 [0]을 사용해도 됩니다.


둘째로 숫자가 모두 2자리여야 하는 부분도 검색을 통해 [참고](https://c10106.tistory.com/2104)했습니다.

```javascript
function decimalToHex(d, padding) {
  var hexa = Number(d).toString(16);
  padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
  while (hexa.length < padding) {
    hexa = "0" + hexa;
  }
  return hexa;
}
```
문자의 길이(.length)를 이용해 "0"을 붙일 수 있다는 것을 알았습니다. 중간의 padding에 관한 식은 연산자의 우선순위를 알고 나서야 이해할 수 있었습니다. 풀이하면 padding이 undefined이거나 null이면 padding은 2이고 그렇지 않으면 padding은 0이라는 뜻입니다.

마지막으로 Hex와 RGBA의 반복문들을 함수를 이용하면 더 간결하게 쓸 수도 있었을 것 같습니다.

<br>

#### Text Color
```javascript
// HEX text
function hexText() {
  for(let i = 0; i <= 100; i++) {
    let num = Math.round(255/100*i);
    let hexNum = decimalToHex(num, 2);
    document.getElementsByClassName(`hex${i}`)[0].innerHTML = `HEX<br>${hexNum}`;
  }
}
hexText();

// RGB text
function rgbText() {
  for(let i = 0; i <= 100; i++) {
    document.getElementsByClassName(`rgb${i}`)[0].innerHTML = `RGB<br>${i/100}`;
  }
}
rgbText();
```
1. 글자 색상에 관한 식에는 상자 색상처럼 반복문을 한 번 더 쓰지 않고 인덱스 [0]을 사용했습니다. 덕분에 코드가 간결해졌습니다.
2. 함수 외에 명령어를 실행시키는 방법을 몰라서 함수를 사용하여 실행시켰습니다.
3. 의도하지는 않았지만 .innerHTML을 이용하니 원래 있던 문자가 사라졌습니다. 지정 요소의 내용을 아예 바꿔주는 코드로 보입니다.

<br>

# 마침
- 놀랍게도 일일이 쓰는 것보다 훨씬 많은 시간이 들었습니다. 그래도 javascript를 이용해서 원하는 것을 구현해냈다는 사실이 뿌듯합니다.
- Hex코드가 IE에서 구동되지 않는다는 것 둘째로 치고 일단 사용 자체가 그리 편리하지는 않은 것 같습니다. 투명도를 입력할 때 Hex를 RGBA로 변환하는 것 만큼이나 %를 Hex로 변환하여 사용하는 것도 꽤 번거로운 일이네요.


<script>
  // 10진수 값 d를 16진수로 변환 + 패딩 추가
  // https://c10106.tistory.com/2104
  function decimalToHex(d, padding) {
    var hexa = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
    while (hexa.length < padding) {
      hexa = "0" + hexa;
    }
    return hexa;
  }

  // HEX color
  for(let i = 0; i <= 100; i++){
    let hex = document.getElementsByClassName(`hex${i}`);
    for(let j = 0; j < hex.length; j++){
      let num = Math.round(255/100*i);
      let hexNum = decimalToHex(num, 2);
      hex[j].style.backgroundColor = `#000000${hexNum}`;
    }
  }

  // HEX text
  function hexText() {
    for(let i = 0; i <= 100; i++) {
      let num = Math.round(255/100*i);
      let hexNum = decimalToHex(num, 2);
      document.getElementsByClassName(`hex${i}`)[0].innerHTML = `HEX<br>${hexNum}`;
    }
  }
  hexText();

  // RGB color
  for(let i = 0; i <= 100; i++){
    let rgb = document.getElementsByClassName(`rgb${i}`);
    for(let j = 0; j < rgb.length; j++){
      rgb[j].style.backgroundColor = `rgba(0,0,0,${i/100}`;
    }
  }
  // RGB text
  function rgbText() {
    for(let i = 0; i <= 100; i++) {
      document.getElementsByClassName(`rgb${i}`)[0].innerHTML = `RGB<br>${i/100}`;
    }
  }
  rgbText();

  // 글자색
  for(let i = 51; i <= 100; i++){
    let color = document.getElementsByClassName(`box${i}`);
    for(let j = 0; j < color.length; j++){
      color[j].style.color = `#fff`;
    }
  }
</script>