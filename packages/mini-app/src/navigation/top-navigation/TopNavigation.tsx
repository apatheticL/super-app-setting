import {createMaterialTopTabNavigator, MaterialTopTabBar} from "@react-navigation/material-top-tabs";
import ProductForYouScreen from "../../screens/ProductForYouScreen";
import TopTabBar from "./TabBarComponent";
import {Dimensions} from "react-native";
import SaleProductLastMonth from "../../screens/SaleProductLastMonth";
import ProductFreeShipScreen from "../../screens/ProductFreeShipScreen";
import ProductCoinScreen from "../../screens/ProductCoinScreen";

type TopNavigationParam = {
    productForYou: undefined,
    lastMonth: undefined,
    freeShip: undefined,
    coin: undefined,

}
const Tab = createMaterialTopTabNavigator()
const TopNavigation = () => {
    const {width} = Dimensions.get('window');
    MaterialTopTabBar
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {fontSize: 12, color: 'black'},
                tabBarInactiveTintColor: "grey",
                // tabBarItemStyle: {width: width/4},
                tabBarActiveTintColor: '#e91e63',
                tabBarStyle: {backgroundColor: 'pink'},
                tabBarGap: 10,
                tabBarAndroidRipple: {borderless: false},

            }}
            tabBar={props => <TopTabBar {...props} />}
        >
            <Tab.Screen options={{
                title: "Product For You"
            }} name={"productForYou"} component={ProductForYouScreen}/>
            <Tab.Screen options={{
                title: "Last Month"
            }} name={"lastMonth"} component={SaleProductLastMonth}/>
            <Tab.Screen options={{
                title: "Free Ship"
            }} name={"freeShip"} component={ProductFreeShipScreen}/>
            <Tab.Screen options={{
                title: "Coin"
            }} name={"coin"} component={ProductCoinScreen}/>
        </Tab.Navigator>
    )
}
export default TopNavigation;