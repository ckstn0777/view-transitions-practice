import "./App.css";

function App() {
  return (
    <>
      <h2>View Transitions API 플레이그라운드</h2>
      <ul className="main-card-list">
        <li>
          <a
            href={`/view-transitions-practice/example/1`}
            className="main-card"
          >
            <h2>기본적인 구현</h2>
            <span className="main-card-title">
              View Transitions API 없이 구현하기
            </span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default App;
