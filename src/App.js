import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { removeLoading } from './actions';
import './App.scss';
import Loading from './pages/Loading';
import Router from './router/router';

function App() {

  const dispatch = useDispatch();

  const onPageLoad = () => {
    dispatch(removeLoading(true))
  }

  useEffect(() => {
    if (document.readyState === "complete") {
      onPageLoad()
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  },[])

  return (
    <BrowserRouter>
      <div className="App">
          <Router />

          <Loading />
      </div>
    </BrowserRouter>
  );
}

export default App;
