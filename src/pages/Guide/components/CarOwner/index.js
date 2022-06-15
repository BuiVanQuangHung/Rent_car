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
        description: `Đăng nhập vào Mioto qua Facebook, Google, số điện thoại hoặc email của bạn.`,
        img: 'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000',
    },
    {
        label: 'Đăng Ký Xe',
        description:
            'Bạn chỉ cần đưa thông tin, mô tả, hình ảnh xe của bạn lên hệ thống. Cập nhật thời gian, mức giá mong muốn và các yêu cầu khác của bạn đối với khách thuê. Hoặc bạn có thể đăng ký chủ xe tại đây',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEo-jYVDVQUP81nn9Z1ZOqiVSOJSjkQKV9w&usqp=CAU',
    },
    {
        label: 'Duyệt Xe',
        description: `Bạn chỉ cần chờ trong vài phút, hệ thống sẽ kiểm duyệt xe của bạn có đáp ứng đủ hay không yêu cầu cho thuê. Mioto sẽ chủ động liện hệ với bạn trong trường hợp có vấn đề phát sinh.`,
        img: 'https://cdn.baogiaothong.vn/upload/images/2021-2/article_social_image/2021-06-04/img-bgt-2021-img-bgt-2021-img-bgt-2021-kv-race-app-noncta-1622793520-width1200height630-1622794124-width1200height630-1622794125-width1200height630.jpg',
    },
    {
        label: 'Nhận Và Phản Hồi',
        description: `Khi có khách gửi yêu cầu thuê xe, bạn sẽ nhận được thông báo từ Mioto. Kiểm tra thông tin cá nhân của khách và xác nhận cho thuê sớm nhất có thể.
        Khi có sự đồng ý cho thuê từ bạn, khách thuê sẽ chuyển tiền đặt cọc để hoàn tất việc đặt xe.`,
        img: 'https://thumbs.dreamstime.com/b/people-showing-customer-feedback-evaluation-emoticons-130140715.jpg',
    },
    {
        label: 'Bàn Giao Xe',
        description: `Bạn và khách thuê liên hệ gặp nhau để bàn giao xe.
        Kiểm tra giấy phép lái xe, các giấy tờ liên quan và tài sản đặt cọc của khách.
        Kiểm tra xe, kí xác nhận biên bản bàn giao và gửi chìa khóa xe của bạn cho vị khách đáng tin cậy.`,
        img: 'https://media.istockphoto.com/photos/female-car-salesperson-handing-over-the-new-car-keys-picture-id925115968?k=20&m=925115968&s=612x612&w=0&h=xxtRiFMPCJcHGaF3VoI96KxOwqK66shqvV1SzmpcU9Y=',
    },
    {
        label: 'Nhận Xe',
        description: `Sau khi hết thời gian khách thuê, gặp khách thuê, kiểm tra xe, kí biên bản bàn giao và nhận lại xe của bạn như thỏa thuận ban đầu.
        Đừng quên cho điểm rating khách thuê và gợi ý họ cho điểm bạn trên ứng dụng Mioto. Điều này sẽ tăng uy tín của bạn trong cộng đồng thuê xe tự lái Mioto.`,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWk50Uvz0Wy_kfUFAtSnpmO2ZTnwTDaLXG6DwqQ0gT8oBDY5rgsTlX7f2x174BZZwjLTI&usqp=CAU',
    },
];

export default function CarOwner() {
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
