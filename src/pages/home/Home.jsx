import Chart from "../../components/chart/Chart";
import FeatureInfo from "../../components/featuredInfo/FeatureInfo";
import "./home.css";
import {userData} from "../../dummyData"
import WidgetSm from "../../components/widget small/WidgetSm";
import WidgetLg from "../../components/widget large/WidgetLg";

export default function Home() {
  return (
    <div  className="home">

   
  <FeatureInfo />

  <Chart  title="User Analytics"  data={userData} grid   dataKey="Active Users"  />

  <div className="homeWidgets">

    <WidgetSm />
    <WidgetLg />

  </div>



    </div>
  )
}
