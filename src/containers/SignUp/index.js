import React from 'react';
import { connect } from 'react-redux';

import {
    View,
    Platform,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import { NavigationActions } from 'react-navigation';

import styles from 'styles/Styles';
import COLOR_SCHEME from 'styles/ColorScheme';
import COLOR from 'styles/Color';
import Logo from 'components/Logo';
import Preloader from 'containers/Preloader';
import GlobalModal from 'containers/Modal';
import { signUp } from './actions';
import Form from './Form';

class SignUp extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={styles.safearea}>
                <StatusBar
                    barStyle={Platform.OS === 'ios' ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT}
                    backgroundColor={COLOR.PRIMARY_DARK}
                />
                <KeyboardAwareView>
                    <View style={[styles.container]}>
                        <Logo />
                        <Form
                            onSubmit={this.props.signUp}
                            goToLogin={this.props.goToLogin}
                        />
                        <GlobalModal />
                        <Preloader />
                    </View>
                </KeyboardAwareView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = ({ preloader, modal }) => ({
    preloader,
    modal,
});

const mapDispatchToProps = {
    signUp,
    goToLogin: () => NavigationActions.navigate({ routeName: 'Login' }),
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
