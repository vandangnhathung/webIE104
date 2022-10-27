import React from 'react';
import SideContent1 from '../SideContent/SideContent1';
import SideContent2 from '../SideContent/SideContent2';
import SideContent3 from '../SideContent/SideContent3';
import SideContent4 from '../SideContent/SideContent4';
import Box from './Box';

const Container = () => {
    return (
        <div className='grid' style={{marginBottom: "10px"}}>
        <div style={{display: "flex", flexDirection: "column", gap: "25px"}}>
            <Box title="Triết lý giáo dục của Trường Đại học Công nghệ Thông tin" author="@Tác giả" date="Ngày 20/10/2021" img="https://source.unsplash.com/featured/900x601"
           >
            <div>
            <p>Trường Đại học Công nghệ Thông tin hướng đến sự phát triển toàn diện của con người, đề cao tính độc lập, sáng tạo và phục vụ cộng đồng. Toàn thể sinh viên, giảng viên và nhân viên của Trường cùng tham gia vào quá trình giáo dục để giúp sinh viên trở thành công dân:
            - Chính trực, trách nhiệm và yêu thương con người;
            </p>
            
            <p>- Khao khát khám phá và sáng tạo khoa học công nghệ;</p>
            
            <p>- Có kiến thức, kỹ năng chuyên môn vững vàng, biết hợp tác và chia sẻ;</p>
            
            <p>- Có khả năng học tập suốt đời để thích ứng với mọi thay đổi;</p>
            
            <p>- Có hoài bão, đóng góp tích cực cho sự phát triển của cộng đồng và xã hội.</p>
            </div>
           </Box>
           <Box title="Tầm nhìn - Sứ mạng" author="@Tác giả" date="Ngày 20/10/2021" img="https://source.unsplash.com/featured/900x601"
           >
            <div>
            <p>- Trường Đại học Công nghệ Thông tin là một trung tâm đào tạo đại học, sau đại học cung cấp nguồn nhân lực chất lượng cao, nhằm đáp ứng nhu cầu của thị trường lao động và phục vụ cộng đồng.

            </p>
            
            <p>- Trường Đại học Công nghệ Thông tin là một trung tâm hàng đầu về nghiên cứu khoa học và chuyển giao công nghệ về công nghệ thông tin – truyền thông và các lĩnh vực liên quan.</p>
            
            
            
            </div>
           </Box>
           <Box title="Triết lý giáo dục của Trường Đại học Công nghệ Thông tin" author="@Tác giả" date="Ngày 20/10/2021" img="https://source.unsplash.com/featured/900x601"
           >
            <div>
            <p>Trường Đại học Công nghệ Thông tin hướng đến sự phát triển toàn diện của con người, đề cao tính độc lập, sáng tạo và phục vụ cộng đồng. Toàn thể sinh viên, giảng viên và nhân viên của Trường cùng tham gia vào quá trình giáo dục để giúp sinh viên trở thành công dân:
            - Chính trực, trách nhiệm và yêu thương con người;
            </p>
            
            <p>- Khao khát khám phá và sáng tạo khoa học công nghệ;</p>
            
            <p>- Có kiến thức, kỹ năng chuyên môn vững vàng, biết hợp tác và chia sẻ;</p>
            
            <p>- Có khả năng học tập suốt đời để thích ứng với mọi thay đổi;</p>
            
            <p>- Có hoài bão, đóng góp tích cực cho sự phát triển của cộng đồng và xã hội.</p>
            </div>
           </Box>
        </div>
        <div style={{marginLeft: "auto"}}>

        <SideContent1></SideContent1>
        <SideContent2></SideContent2>
        <SideContent3></SideContent3>
        <SideContent4></SideContent4>
        </div>
        </div>
    );
};

export default Container;