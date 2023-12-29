import {FC} from "react";
import {View} from "react-native";
import {HeaderComponent} from "./component/header.component";
import {LayoutBanner} from "./component/LayoutBanner";
import {ListItemMenu} from "./component/list-menu.component";
import {Color} from "../../core/color";
import {pxToPercentage} from "../../core/utils";

interface HomeProps {
    onProductPress: () => void;
    onServicePress: () => void;
    onClinicPress: () => void;
    onNotificationPress: () => void;
    onMarketPress: () => void;

}

export const HomeComponent: FC<HomeProps> = (props) => {
    return (
        <View style={{backgroundColor:Color.White, flex: 1, paddingHorizontal: pxToPercentage((16))}}>
            <HeaderComponent
                avatarUrl={"https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg"}
                title={"Chào buổi sáng"} subtitle={"Chúc bạn ngày mới tốt lành"} unreadNoti={1}
                onNotificationPress={props.onNotificationPress}
            />
            <View style={{flexDirection:"row",    width: '100%',
                justifyContent: 'space-between',
                height: pxToPercentage(340), }}>
                <View style={{
                    width: pxToPercentage(223),
                    height: pxToPercentage(340),
                    justifyContent: 'flex-end',
                    overflow: 'hidden'}}>
                    <LayoutBanner onPress={props.onMarketPress}/>

                </View>
                <ListItemMenu onProductsPress={props.onProductPress} onServicePress={props.onServicePress}
                              onClinicPress={props.onClinicPress}/>

            </View>
        </View>
    );
}