import React from "react";
import { 
    StyleSheet, 
    View, 
    Text, 
    ScrollView, 
    KeyboardAvoidingView, 
    TextInput, 
    TouchableOpacity, 
    Image, 
    Platform } from "react-native";
import { Formik } from "formik";
import * as yup from 'yup';

//validation
const formSchama = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6)
})

const LoginScreen = navData => {

    return (
        <KeyboardAvoidingView
            hehavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}

                    validationSchema={formSchama}

                    onSubmit={(values) => {
                        console.log(values);
                        navData.navigation.navigate('Home')
                    }}
                >
                    {(props) => (
                        <View style={styles.container}>

                            <View style={styles.logo}>
                                <Image source={require('../assets/images/logo.png')}style={styles.image} />
                            </View>

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    placeholderTextColor="#fff"
                                    keyboardType="email-address"
                                    onChangeText={props.handleChange("email")}
                                    value={props.values.email}
                                    
                                />


                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    placeholderTextColor="#fff"
                                    secureTextEntry={true}
                                    onChangeText={props.handleChange("password")}
                                    value={props.values.password}
                                    
                                />


                                <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>

                                <View style={styles.registerContainer}>
                                    <Text style={styles.registerText}>
                                        Don't have account?
                                    </Text>

                                    <TouchableOpacity
                                        onPress={() => navData.navigation.navigate('Register')}
                                    >
                                        <Text style={styles.registerButton}>
                                            Register
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                    )}

                </Formik>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    logo: {
        alignItems: "center",
        marginBottom: 40,
    },
    image: {
        width: 100,
        height: 100,
    },
    input: {
        width: 300,
        backgroundColor: "#B6BFC4",
        borderRadius: 25,
        padding: 16,
        fontSize: 16,
        marginVertical: 10,
    },
    button: {
        width: 300,
        backgroundColor: "#738289",
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#ffffff",
        textAlign: "center",
    },
    registerContainer: {
        alignItems: "flex-end",
        justifyContent: "center",
        paddingVertical: 16,
        flexDirection: "row",
    },
    registerText: {
        color: "#738289",
        fontSize: 16,
    },
    registerButton: {
        color: "#738289",
        fontSize: 16,
        fontWeight: "bold",
    },
    error: {
        color: 'red'
    }
});

export default LoginScreen;