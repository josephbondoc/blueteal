import React, {useState} from 'react';
import Classes from './Classes/Classes';
import Forums from './Forums/Forums';
import Home from './Home/Home';
import Performance from './Performance/Performance';
import Schedule from './Schedule/Schedule';
import Menu from './comps/Menu/Menu';
import theme from '../styles/ThemeStyles';
import './DashboardStyles.scss';


function Dashboard() {

    //cont is default to Home.js
    var Content = null;
    const [cont, setCont] = useState ('Classes');


    if(cont == 'Home'){
        Content = <Home 
                    
                    />
      }
    if(cont == 'Classes'){
        Content = <Classes 
                    
                    />
      }
    if(cont == 'Schedule'){
        Content = <Schedule 
                    
                    />
      }
    if(cont == 'Performance'){
        Content = <Performance 
                    
                    />
      }
    if(cont == 'Forums'){
        Content = <Forums 
                    
                    />
      }

      var items = [
        {
          itemTitle:'Home',
          onClick:()=>{setCont('Home')}
        },
        {
          itemTitle:'Classes',
          onClick:()=>{setCont('Classes')}
        },
        {
          itemTitle:'Schedule',
          onClick:()=>{setCont('Schedule')}
        },
        {
          itemTitle:'Performance',
          onClick:()=>{setCont('Performance')}
        },
        {
          itemTitle:'Forums',
          onClick:()=>{setCont('Forums')}
        },
      ]


  return (
        <div className="body" style={{backgroundColor:theme.background}}>
    <div style={{backgroundColor:theme.green}} className="column" id="left">

        <div id="bottom">

        <div className="t">[app icon nhere]</div>

          <Menu items={items}/>

        <div className="settings">[settings]</div>

        </div>
    </div>

    <div id="right" className="column">
    <div class="top-right">

      <div class="user">
      [username here][user icon here]
      </div>
      
      </div>
    <div class="bottom">
      {Content}
    </div>
    </div>
    
    </div>
  );
}

export default Dashboard;
