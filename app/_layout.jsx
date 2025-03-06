import { Tabs } from "expo-router";
import { Ionicons} from '@expo/vector-icons';

export default function Layout() {
    return (
        <Tabs screenOptions={{ 
            tabBarActive: "#007Aff", 
            tabBarInactive: "#8E8E93", 
            tabBarStyle: {
                backgroundColor: "#ffffff",
                borderTopWidth: 1,
                borderTopColor: "#E0E0E0",
                height: 60,
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "bold",
            },
            

            }}
        >
            <Tabs.Screen name="index" options={{ 
                tittle: "Home",
                tabBarIcon: ({color, size}) => (<Ionicons name="home" color={color} size={size} />
                    ),
                }}
                />

           
                <Tabs.Screen name="news" options={{ 
                tittle: "Perfil",
                tabBarIcon: ({color, size}) => (<Ionicons name="newspaper-outline" color={color} size={size} />
                    ),
                }}  
                />

<Tabs.Screen name="profile" options={{ 
                tittle: "Perfil",
                tabBarIcon: ({color, size}) => (<Ionicons name="person" color={color} size={size} />
                    ),
                }}  
                />
        </Tabs>
        );
}