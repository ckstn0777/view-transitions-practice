import "./App.css";

function App() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-10">
        View Transitions API 플레이그라운드
      </h2>
      <ul className="main-card-list">
        <li>
          <a
            href={`/view-transitions-practice/example/1`}
            className="main-card px-8 py-8"
          >
            <h2 className="text-2xl font-bold mt-2 mb-6">
              Use not View Transitions API
            </h2>
            <span className="main-card-title">
              View Transitions API 없이 구현하기
            </span>
          </a>
        </li>
        <li>
          <a
            href={`/view-transitions-practice/example/2`}
            className="main-card px-8 py-8"
          >
            <h2 className="text-2xl font-bold mt-2 mb-6">
              View Transitions API #1
            </h2>
            <span className="main-card-title">
              View Transitions API 를 사용해 구현하기
            </span>
          </a>
        </li>
        <li>
          <a
            href={`/view-transitions-practice/example/3`}
            className="main-card px-8 py-8"
          >
            <h2 className="text-2xl font-bold mt-2 mb-6">
              View Transitions API #2
            </h2>
            <span className="main-card-title">
              View Transitions API 커스텀 애니메이션
            </span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default App;
