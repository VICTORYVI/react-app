import { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault(); // 기본 이벤트를 취소합니다. 여기서는 페이지가 다시 로드되는 것을 방지합니다.
              this.props.onChangePage(); // 부모 컴포넌트로부터 전달받은 onChangePage 함수를 호출합니다.
            }.bind(this)} // onClick 핸들러 내부에서 this가 컴포넌트 인스턴스를 가리키도록 bind 함수를 사용합니다.
          >
            {/* this.props.title을 사용하여 부모 컴포넌트로부터 전달받은 title 값을 표시합니다. */}
            {this.props.title}
          </a>
        </h1>
        {/* 부모 컴포넌트로부터 전달받은 sub 프로퍼티를 화면에 표시합니다. */}
        {this.props.sub}
      </header>
    );
  }
}

// Subject 컴포넌트를 export 하여 다른 파일에서 import하여 사용할 수 있도록 합니다.
export default Subject;
