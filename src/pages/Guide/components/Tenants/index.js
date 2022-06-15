import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
    {
        label: 'Đăng Nhập',
        description: `Đăng nhập vào Mioto qua Facebook, Google, số điện thoại hoặc email của bạn. Chúng tôi cần bạn xác thực số điện thoại trước khi đặt xe.`,
        img: 'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000',
    },
    {
        label: 'Tìm Xe',
        description: 'Bạn có thể tìm xe ưng ý nhanh chóng ở nơi bạn muốn tìm, thời gian, hãng xe, đặt xe nhanh',
        img: 'https://res.cloudinary.com/comparis-cms/image/upload/c_fill,g_center,w_256,ar_1,f_auto,q_auto/v1623330489/carfinder/2ndlevelpage/USPs/USP2_g4f4jf.svg',
    },
    {
        label: 'Đặt Xe',
        description: `Lựa chọn chiếc xe mà bạn ưng ý và gửi Yêu cầu xe đến Chủ xe. Sau đó chủ xe sẽ nhanh chóng phản hồi đến bạn trong thời gian nhanh nhất.
        Nếu bạn không muốn mất nhiều thời gian chờ đợi, có thể lựa chọn chiếc xe khác có tính năng  Đặt xe nhanhđể đặt xe trực tiếp mà không cần thông qua sự phản hồi từ phía Chủ xe`,
        img: 'https://image.shutterstock.com/image-photo/cars-sale-stock-row-car-260nw-636632101.jpg',
    },
    {
        label: 'Đặt Cọc',
        description: `Sau khi nhận được sự đồng ý từ chủ xe, khách hàng có thể đặt cọc bằng 3 hình thức chuyển khoản, ví điện tử hoặc tiền mặt.`,
        img: 'https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696228__340.jpg',
    },
    {
        label: 'Nhận xe',
        description: `Bạn và chủ xe liên hệ gặp nhau để nhận xe. Ở Mioto, có nhiều chủ xe sẵn sàng đem xe đến tận nơi cho bạn.
        Kiểm tra tình trạng và giấy tờ xe, xuất trình bản gốc các giấy tờ, kí xác nhận biên bản giao xe, nhận chìa khóa và bắt đầu hành trình của bạn`,
        img: 'https://media.istockphoto.com/photos/female-car-salesperson-handing-over-the-new-car-keys-picture-id925115968?k=20&m=925115968&s=612x612&w=0&h=xxtRiFMPCJcHGaF3VoI96KxOwqK66shqvV1SzmpcU9Y=',
    },
    {
        label: 'Trả xe',
        description: `Sau khi hết thời gian thuê, bạn hoàn trả xe giống như tình trạng và thỏa thuận ban đầu. Kí xác nhận biên bản bàn giao, nhận lại giấy tờ để hoàn thành chuyến đi tuyệt vời của bạn.
        Đừng quên cho điểm rating và nhận xét của bạn đến chủ xe để nâng cao chất lượng phục vụ cho những hành trình sắp tới nhé!`,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWk50Uvz0Wy_kfUFAtSnpmO2ZTnwTDaLXG6DwqQ0gT8oBDY5rgsTlX7f2x174BZZwjLTI&usqp=CAU',
    },
];

export default function Tenants() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ maxWidth: 500, flexGrow: 1, textAlign: 'center' }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    background: 'black',
                    color: 'white',
                }}
            >
                <Typography variant="h3" gutterBottom component="div">
                    {steps[activeStep].label}
                </Typography>
            </Paper>
            <Box
                sx={{
                    height: 150,
                    maxWidth: 500,
                    width: '100%',
                    p: 2,
                    color: 'white',
                    fontSize: 'medium',
                }}
            >
                {steps[activeStep].description}
            </Box>
            <img style={{ height: 300, maxWidth: 500, width: '100%', p: 2 }} src={steps[activeStep].img} alt="" />
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}
