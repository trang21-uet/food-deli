import { StyleSheet } from 'react-native';

const getStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
    },
    title: {
      fontSize: 22,
      fontFamily: 'Linotte-Bold',
      textTransform: 'uppercase',
      marginBottom: 30,
    },
    input: {
      marginTop: 10,
      borderColor: 'red',
    },
    button: {
      width: '100%',
      borderRadius: 10,
      backgroundColor: colors.primary,
      paddingBottom: 15,
      paddingTop: 12,
      marginVertical: 15,
    },
    buttonText: {
      color: colors.white,
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'Linotte-Bold',
    },
    errorText: {
      width: '100%',
      fontSize: 12,
      color: '#F00',
      textAlign: 'left',
    },
    closeBtn: {
      position: 'absolute',
      top: 0,
      left: 20,
    },
  });

const errorMsg = {
  emptyEmail: 'Bạn chưa nhập email',
  emptyPass: 'Bạn chưa nhập mật khẩu',
  emptyRepass: 'Bạn chưa nhập lại mật khẩu',
  wrongInfo: 'Thông tin đăng nhập chưa chính xác',
  invalidEmail: 'Email cần đúng định dạng (name@example.com)',
  passNotMatch: 'Hai mật khẩu chưa trùng khớp',
  emailNotFound: 'Email chưa đăng ký tài khoản',
  wrongOtp: 'OTP chưa chính xác',
  expiredOtp: 'OTP đã quá hạn',
};

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export { getStyles, errorMsg, emailRegex };
