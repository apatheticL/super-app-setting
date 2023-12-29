import {FC} from "react";
import {View} from "react-native";
import {ItemMenuComponent} from "./item-menu.component";
import {ImagesSource} from "../../../assets/images";
import {styleHome} from "./styles";

interface ListItemProps {
    onProductsPress: () => void;
    onServicePress: () => void;
    onClinicPress: () => void;

}

export const ListItemMenu: FC<ListItemProps> = (props) => {
    return (
        <View style={styleHome.viewContainerMenu}>
            <ItemMenuComponent  theme={'default'} imageSource={ImagesSource.homeProduct} title={"Products"}
                               onPress={props.onProductsPress}/>
            <ItemMenuComponent theme={'teal'} imageSource={ImagesSource.homeService} title={"Service"} onPress={props.onServicePress}/>
            <ItemMenuComponent theme={'gray'} imageSource={ImagesSource.homeClinic} title={"Clinics"} onPress={props.onClinicPress}/>
        </View>
    );
}