import React, { Component } from "react";
import { useState } from "react";
import "./index.css";

import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 4;
    this.state = {
      mode: "welcome",
      selected_content_id: 0,
      subject: { title: "MBTI", sub: "MBTI의 세계에 어서오세요!" },
      welcome: {
        title: "MBTI는",
        desc: "아이스 브레이킹으로 최고의 주제이고 이 시간을 통해 배워가세요",
      },
      contents: [
        {
          id: 1,
          title: "MBTI는?",
          desc: "마이어스-브릭스 유형 지표(Myers-Briggs Type Indicator MBTI)는 작가 캐서린 쿡 브릭스(Katharine C. Briggs)와 그녀의 딸 이자벨 브릭스 마이어스(Isabel B. Myers)가 카를 융의 초기 분석심리학 모델을 바탕으로 1944년에 개발한 자기보고형 성격 유형 검사로 사람의 성격을 16가지의 유형으로 나누어 설명한다.",
                },
        {
          id: 2,
          title: "MBTI 4개의 축",
          desc: "MBTI에서는 인간의 내적 과정을 다음과 같이 4가지 선호 경향으로 분류한다. 외향(E)과 내향(I). 직관(N)과 감각(S). 감정(F)과사고(T). 판단(J)과인식(P) 이다.",
        },
        {
          id: 3,
          title: "MBTI의 기능 ",
          desc: "총 4가지로 주 기능, 보조기능,3차기능,4차기능으로 나눠진다. ",
        },
        { id: 4, title: "유형들", desc: "총 16가지"},
      ],
    };
  }

  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }

  getContent() {
    var _title,
      _desc,
      _article = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent();
      _article = (
        <ReadContent title={_content.title} desc={_content.desc} ></ReadContent>
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            var _contents = this.state.contents.concat({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
              image: "",
            });
            this.setState({ contents: _contents });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      // var _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            var _contents = this.state.contents.concat({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
              image: "",
            });
            this.setState({ contents: _contents });
          }.bind(this)}
        ></UpdateContent>
      );
    }

    return _article;
  }

  render() {
    return (
      <div className="container">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>

        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <div className="container">{this.getContent()}</div>
        <Head></Head>
        <h2>QnA?</h2>
        <Control
          onChangeMode={function (_mode) {
            if (_mode === "delete") {
              if (window.confirm("really?")) {
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while (i < _contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                  }
                  i = i + 1;
                }
              }
              this.setState({ mode: "wellcome", contents: _contents });
            } else {
              this.setState({ mode: _mode });
            }
          }.bind(this)}
        ></Control>
      </div>
    );
  }
}

export default App;

function Head() {
  const [INFPSHOW, INFPcShow] = useState(false);
  const [ISFPSHOW, ISFPcShow] = useState(false);
  const [INTPSHOW, INTPcShow] = useState(false);
  const [ISTPSHOW, ISTPcShow] = useState(false);
  const [ENFPSHOW, ENFPcShow] = useState(false);
  const [ENFJSHOW, ENFJcShow] = useState(false);
  const [ESFPSHOW, ESFPcShow] = useState(false);
  const [ESFJSHOW, ESFJcShow] = useState(false);
  const [ENTPSHOW, ENTPcShow] = useState(false);
  const [ENTJSHOW, ENTJcShow] = useState(false);
  const [ESTPSHOW, ESTPcShow] = useState(false);
  const [ESTJSHOW, ESTJcShow] = useState(false);
  const [INFJSHOW, INFJcShow] = useState(false);
  const [ISFJSHOW, ISFJcShow] = useState(false);
  const [INTJSHOW, INTJcShow] = useState(false);
  const [ISTJSHOW, ISTJcShow] = useState(false);
  return (
    <header>
      <h2>16가지 유형들 </h2>
      <ol>
        <li>NF</li>
        <ll>
          <input
            type="button"
            value="INFP"
            onClick={() => INFPcShow(!INFPSHOW)}
          ></input>
        </ll>
        <ll>
          <input
            type="button"
            value="ENFP"
            onClick={() => ENFPcShow(!ENFPSHOW)}
          ></input>
        </ll>
        <ll>
          <input
            type="button"
            value="ENFJ"
            onClick={() => ENFJcShow(!ENFJSHOW)}
          ></input>
        </ll>
        <ll>
          <input
            type="button"
            value="INFJ"
            onClick={() => INFJcShow(!INFJSHOW)}
          ></input>
        </ll>
        <li>NT</li>
        <ll>
          <input
            type="button"
            value="INTP"
            onClick={() => INTPcShow(!INTPSHOW)}
          ></input>
        </ll>
        <ll>
          <input
            type="button"
            value="ENTP"
            onClick={() => ENTPcShow(!ENTPSHOW)}
          ></input>
        </ll>
        <ll>
          <input
            type="button"
            value="ENTJ"
            onClick={() => ENTJcShow(!ENTJSHOW)}
          ></input>
        </ll>
        <ll>
          <input
            type="button"
            value="INTJ"
            onClick={() => INTJcShow(!INTJSHOW)}
          ></input>
        </ll>
        <li>SP</li>
        <ll>
          <input
            type="button"
            value="ISFP"
            onClick={() => ISFPcShow(!ISFPSHOW)}
          ></input>
        </ll>
        <ll>
          <input
            type="button"
            value="ESFP"
            onClick={() => ESFPcShow(!ESFPSHOW)}
          ></input>
        </ll>
        <ll>
          <input
            type="button"
            value="ISTP"
            onClick={() => ISTPcShow(!ISTPSHOW)}
          ></input>
        </ll>
        <ll>
          <input
            type="button"
            value="ESTP"
            onClick={() => ESTPcShow(!ESTPSHOW)}
          ></input>
        </ll>
        <li>SJ</li>
        <ll>
          <input
            type="button"
            value="ISFJ"
            onClick={() => ISFJcShow(!ISFJSHOW)}
          ></input>
        </ll>
        <ll>
          <input
            type="button"
            value="ESFJ"
            onClick={() => ESFJcShow(!ESFJSHOW)}
          ></input>
        </ll>
        <ll>
          <input
            type="button"
            value="ISTJ"
            onClick={() => ISTJcShow(!ISTJSHOW)}
          ></input>
        </ll>
        <ll>
          <input
            type="button"
            value="ESTJ"
            onClick={() => ESTJcShow(!ESTJSHOW)}
          ></input>
        </ll>
      </ol>
      {INFPSHOW ? (
        <div className="container">
          <h2>INFP 중재자, 잔 다르크형</h2>
          <p>
            차분하고 창의적이며 낭만적인 성향으로 보이지만 내면은 내적신념이
            깊은 열정적인 중재자 유형이다. 인간 본연에 대한 애정으로 사람들의
            장점을 발견하고, 이들의 가능성을 성취할 수 있도록 도우며, 세상을 더
            나은 곳으로 만든다. 하지만 대그룹에 있을 경우 그들의 에너지가 쉽게
            고갈되는 경향이 있고, 그들이 엄선한 친밀도가 높은 소수의 사람들과
            상호작용 하는 것을 선호한다. 혼자 있기를 좋아하는 개인적인 성향도
            있지만, 수줍음과 혼동되어서는 안되며 혼자 시간을 보내는 것으로부터
            에너지를 얻는다는 것을 의미한다.
          </p>
        </div>
      ) : null}
      {ENFPSHOW ? (
        <div className="container">
          <h2>ENFP 재기발랄한 활동가, 스파크형</h2>
          <p>
            정열적이고 활기가 넘치며 상상력이 풍부하다. 온정적이고 창의적이며
            항상 새로운 가능성을 찾고 시도하는 유형이다. 문제 해결에 재빠르고
            관심이 있는 일은 수행해내는 능력과 열성이 있다. 반복되는 일상적인
            일을 참지 못하고 열성이 나지 않는다. 또한 한 가지 일을 끝내기도 전에
            몇 가지 다른 일을 또 벌이는 경향을 가지고 있다. 통찰력과 창의력이
            요구되지 않는 일에는 흥미를 느끼지 못하고 열성을 불러일으키지
            못한다.
          </p>
        </div>
      ) : null}
      {ENFJSHOW ? (
        <div className="container">
          <h2>ENFJ 선도자, 언변능숙형</h2>
          <p>
            온화하고 적극적이며 책임감이 강하고 사교성이 풍부하고 동정심이 많다.
            상당히 이타적이고 민첩하고 인화를 중요시하며 참을성이 많다. 다른
            사람들의 생각이나 의견에 진지한 관심을 가지고 공동선을 위하여 다른
            사람의 의견에 대체로 동의한다. 미래의 가능성을 추구하며 편안하고
            능란하게 계획을 제시하고 집단을 이끌어가는 능력이 있다. 성격 유형
            검사(MBTI, 16 Personalities, TRUITY 등)에서 통용되는 16가지 유형 중
            ENFJ 유형은 전 세계 인구의 2.5% 정도로 희귀한 유형이며,
            대한민국에서도 3.5% 미만으로 보기 드문 유형이다.
          </p>
        </div>
      ) : null}

      {INFJSHOW ? (
        <div className="container">
          <h2>INFJ 통찰력 있는 선지자, 예언자형</h2>
          <p>
            인내심이 많고 통찰력과 직관력이 뛰어나며 화합을 추구하는 유형이다.
            창의력이 좋으며, 성숙한 경우엔 강한 직관력으로 타인에게 말없이
            영향력을 끼친다. 독창성과 내적 독립심이 강하며, 확고한 신념과
            열정으로 자신의 영감을 구현시켜 나가는 정신적 지도자들이 많다.
            나무보다 숲을 본다. 한 곳에 몰두하는 경향으로 목적 달성에 필요한
            주변적인 조건들을 경시하기 쉽고, 자기 내부의 갈등이 많고 복잡하다.
            이들은 풍부하고 감성적인 내적인 성격을 갖고 있다.
          </p>
        </div>
      ) : null}

      {INTPSHOW ? (
        <div className="container">
          <h2>INTP논리적인 사색가, 논리술사</h2>
          <p>
            조용하고 과묵하며 논리와 분석으로 문제를 해결하기 좋아한다. 먼저
            대화를 시작하지 않는 편이나 관심이 있는 분야에 대해서는 말을 많이
            한다. 이해가 빠르고 직관력으로 통찰하는 능력이 있으며 지적 호기심이
            많아, 분석적이고 논리적이다. MBTI 16가지 성격 유형 중 창의적 지능과
            논리 면에서 가장 뛰어나, 비과학적이거나 논리적이지 못한 일들에
            거부반응을 보일 확률이 높다. 아이디어[28]와 원리, 인과관계에 관심이
            많으며 실체보다는 실체가 품고 있는 가능성에 관심이 많다.[29] 다시
            말해 지식을 아는 것과는 별개로 그에 대한 감각이나 능률적 활용은 다소
            더디다.
          </p>
        </div>
      ) : null}
      {ENTPSHOW ? (
        <div className="container">
          <h2>ENTP 뜨거운 논쟁을 즐기는 변론가, 발명가형</h2>
          <p>
            ENTP는 특유의 능글거리면서 경쾌한 성격과 문제의 본질을 파악하고
            논리적으로 판단하려는 기질이 있고, 어느곳에서나 적응력이 빠른
            성격이다. 본인이 구상하는 바를 실현시키고 싶어하는 기질이 강하며,
            여기에 특유의 아웃사이더적인 성격까지 겹쳐 그야말로 혁명가의 기질을
            띠고 있다. 모든 분야에 있어서, 기존의 체제 자체를 뒤집어 버리거나
            분야 전체의 도약을 이루어내는 인물들이 많다.
          </p>
        </div>
      ) : null}
      {ENTJSHOW ? (
        <div className="container">
          <h2>ENTJ 뛰어난 통솔자, 통솔자형 </h2>
          <p>
            ‘타고난 리더’라고 불리는 이 유형은 권위와 자신감으로 재능을
            구현하고, 공통된 목표 뒤에서 사람들을 끌어모으는 통솔력을 행사한다.
            실제로 문제 해결 과정을 조직하는 관리자 혹은 지도자가 소속 집단 내
            자신의 역할이라고 생각한다. 주로 목표를 달성하기 위해 장기적인 계획
            개발을 즐긴다
          </p>
        </div>
      ) : null}
      {INTJSHOW ? (
        <div className="container">
          <h2>INTJ 용의주도한 전략가, 전략가형</h2>
          <p>
            전략가형 사람은 거의 모든 일에 의문을 던지고, 더 좋은 방법을 찾는
            과정에서 거절당하거나 규칙을 깨는 일을 두려워하지 않는다. 또 단지
            창의적인 데에서 그치지 않고 성취해내기를 원해, 새로운 아이디어에
            통찰력과 뛰어난 논리력, 강한 의지를 더해 일을 추진한다. 이런 유형은
            매우 독립적인 성향을 지녀 혼자 일하거나 결정내리는 것을 선호한다.
            그렇기에 타인에게 무심하다는 편견을 받기도 하지만, 이들은 자신이
            틀렸거나 타인을 다치게 했다고 생각하면 큰 영향을 받고 그 일을
            분석하는 데에 몰두한다. 이들은 단지 의사결정에 있어 감정에 치우치지
            않을 뿐 인간적이다
          </p>
        </div>
      ) : null}

      {ISFPSHOW ? (
        <div className="container">
          <h2>ISFP호기심 많은 예술가, 성인군자형</h2>
          <p>
            말없이 다정하고 온화하며 사람들에게 친절하고 상대방을 잘 알게 될
            때까지 내면의 모습이 잘 보이지 않는다. 의견 충돌을 피하고, 인화를
            중시한다. 인간과 관계되는 일을 할 때 자신의 감정과 타인의 감정에
            지나치게 세심하고 민감한 경향이 있다. 이들은 결정력과 추진력을 기를
            필요가 있을 것이다. 3차 기능인 Ni(내향 직관)으로 눈치가 빠르며,
            조용히 자기 일만 하고 있는 것처럼 보이지만 사실 주변 상황파악도 다
            하고 있다. 경험을 통해서 부기능 Se(외향 감각)과 함께 주기능 Fi(내향
            감정)인 자신의 내면을 보호하는 데에 잘 사용할 수 있다.
          </p>
        </div>
      ) : null}

      {ESFPSHOW ? (
        <div className="container">
          <h2>ESFP 자유로운 영혼의 연예인, 슈퍼스타형</h2>
          <p>
            사교적이고 활동적이며 수용력이 강하고 친절하며 낙천적이다. 어떤
            상황이든 잘 적응하며 현실적이고 실제적이다. 주위의 사람이나 일어나는
            일에 대하여 관심이 많으며 사람이나 사물을 다루는 사실적인 상식이
            풍부하다. 때로는 수다스럽고, 진지함이 결여되거나 마무리를 등한시하는
            경향이 있으나, 어떤 조직체나 공동체에서 밝고 재미있는 분위기 조성
            역할을 잘한다.
          </p>
        </div>
      ) : null}

      {ISTPSHOW ? (
        <div className="container">
          <h2>ISTP 만능 재주꾼, 장인</h2>
          <p>
            과묵하며 절제된 호기심으로 인생을 관찰하고, 상황을 파악하는 민감성과
            도구를 다루는 뛰어난 능력이 있다. 말수가 적으며, 객관적이고
            합리적으로 인생을 관찰하는 유형이다. 필요 이상으로 자신을 발휘하지
            않으며, 일과 관계되지 않는 이상 어떤 상황이나 인간관계에 직접
            뛰어들지 않는다. 가능한 한 에너지 소비를 하지 않으려 하며, 사실적
            자료를 정리, 조직하기를 좋아하는 경향이 있으며 인과관계나 객관적
            원리에 관심이 많다. 3차 기능인 Ni(내향 직관)으로 눈치가 빠르며,
            조용히 자기 일만 하고 있는 것처럼 보이지만 사실 주변 상황파악도 다
            하고 있다. 열등 기능은 Fe(외향 감정)으로 타인에게 공감을 잘 못하는
            경향이 있다.
          </p>
        </div>
      ) : null}

      {ESTPSHOW ? (
        <div className="container">
          <h2>ESTP 모험을 즐기는 사업가, 수완 좋은 활동가형</h2>
          <p>
            사실적이고 관대하며 개방적이고 사람이나 사물에 대한 선입견이 별로
            없다. 강한 현실 감각으로 타협책을 모색하고 문제를 해결하는 능력이
            뛰어나다. 센스 있고 유머러스하다. 어디서든 적응을 잘 하고 친구와
            어울리기를 좋아한다.
          </p>
        </div>
      ) : null}

      {ISFJSHOW ? (
        <div className="container">
          <h2>ISFJ 용감한 수호자, 실용적인 조력가 </h2>
          <p>
            ISFJ 유형의 사람은 꽤 독특한 특징을 갖고 있는데, 이는 정의하는
            성격에 꼭 들어맞지 않는다는 점이다. MBTI 유형 중 가장 정의내리기
            어려운 유형이다. 타인을 향한 연민과 동정심이 있으면서도 가족이나
            친구를 보호할 때는 가차 없는 모습을 보인다거나, 조용하고 내성적인
            반면 관계술이 뛰어나 인간관계를 잘 만들어간다. 또한 안정적인 삶을
            지향하지만 변화를 잘 수용한다. 이 외에도 이들은 한마디로 정의 내리기
            힘든 다양한 성향을 내포하고 있다. 하지만 대체로 조용하고 차분하며
            따뜻하고 친근하다. 책임감과 인내력 또한 매우 강하다.
          </p>
        </div>
      ) : null}
      {ESFJSHOW ? (
        <div className="container">
          <h2>ESFJ 사교적인 외교관, 친선도모형 </h2>
          <p>
            ESFJ는 동정심이 많고 다른 사람에게 관심을 쏟으며 나눔과 베풂을
            중시한다. 타고난 협력자로서 동료애가 많고 친절하며 능동적인
            구성원이다. 이야기 하기를 즐기며 정리정돈을 잘하고, 참을성이 많고
            다른 사람들을 잘 도와준다. 사람을 다루고 행동을 요구하는 분야, 예를
            들면 교직, 성직, 판매 특히 동정심을 필요로 하는 간호나 의료 분야에
            적합하다. 일이나 사람 관련 문제에 대하여 냉철한 입장을 취하기
            어려워한다. 반대 의견에 부딪혔을 때나, 자신의 요구가 거절당했을 때
            마음의 상처를 받는다.
          </p>
        </div>
      ) : null}

      {ISTJSHOW ? (
        <div className="container">
          <h2>ISTJ 청렴결백한 논리주의자, 현실주의자 </h2>
          <p>
            ISTJ는 실제 사실에 대하여 정확하고 체계적으로 기억하며 일 처리에
            있어서도 신중하고 책임감이 있다. 집중력이 강한 현실 감각을 지녔으며
            조직적이고 침착하다. 보수적인 경향이 있으며, 문제를 해결하는데
            과거의 경험을 잘 적용하며, 반복되는 일상적인 일에 대한 인내력이
            강하다. 3차기능인 Fi(내향 감정)로 인해 자신과 타인의 감정과 기분을
            이해하는 능력이 부족하며, 4차기능이 Ne(외향 직관)로 나무보다 숲을
            보는 직관 능력이 매우 부족하여 전체적이고 타협적 방안을 고려하는
            노력이 필요하다. 정확성과 조직력을 발휘하는 분야의 일을 선호한다.
          </p>
        </div>
      ) : null}

      {ESTJSHOW ? (
        <div className="container">
          <h2>ESTJ 엄격한 관리자, 경영자 </h2>
          <p>
            현실적, 구체적, 사실적이며 어떠한 활동을 조직화하고 주도해 나가는
            지도력이 있다. 실질적이고 현실 감각이 뛰어나며 일을 조직하고
            계획하여 추진시키는 능력이 있다. 행정, 의료, 법조, 군대, 경찰, 재무,
            특히나 모든 것을 망라한 한 단어로 조직관리 분야에 뛰어난 재능을
            지녔으며, 체계적으로 사업체나 조직체를 이끌어 나간다. 타고난
            지도자로서 프로젝트의 목표를 설정하고, 지시하고, 결정하고, 독려하여
            기한 내에 철저히 이행하는 능력이 있다. 불확실한 미래의 가능성보다
            흔들리지 않는 현재의 사실을 추구하기 때문에 현실 중심적, 실용적이다.
            하지만 타인과 자신의 감정을 고려하는 능력이 부족할 수 있기 때문에
            속단 속결, 업무 위주로 사람을 대하는 경향성을 보완하기 위해 인간
            중심의 가치에 대해 고민하고 타인의 감정을 고려해야 한다.
          </p>
        </div>
      ) : null}
    </header>
  );
}
