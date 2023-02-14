import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginState } from '../../state/loginState';
import { userInfo } from '../../state/userInfo';
import Title from '../ui/Title';

function Profile() {
  const user = useRecoilValue(userInfo);
  
  const setLoginState = useSetRecoilState(loginState);
  const setUserInfo = useSetRecoilState(userInfo);

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleModal = () => {
  //   console.log(isModalOpen)
  //   setIsModalOpen(true);
  // };
  
  // useEffect(() => {
  //   console.log('useEffect: ', isModalOpen);
  // }, [isModalOpen])

  const handleLogout = () => {
    let willLogout = window.confirm('로그아웃 하시겠습니까?');
      if(willLogout) {
        setLoginState(false);
        setUserInfo({
          id: -1,
          name: '',
          email: '',
        });

        window.location.replace('/'); // 메인화면으로 이동
      }
  }

  return (
    <div className='container center flex-col'>
      <Title title='프로필'/>
      <div className='box'>
        <p className='boxLabel' style={{fontSize: '1rem'}}>이름 : {user.name}</p>
        <p className='boxLabel' style={{fontSize: '1rem'}}>이메일 : {user.email}</p>

        <div style={{height: 'calc(100% - 190px)'}}></div>
        <Link to='/password-change'><div className='button mb-16'>비밀번호 변경</div></Link>
        
        <div className='button' onClick={handleLogout}>로그아웃</div>
        
        {/* <div onClick={handleModal}>모달</div>
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} title='비밀번호 변경'/> */}
      </div>
    </div>
  );
}

export default Profile;