import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginState } from '../../state/loginState';
import { userInfo } from '../../state/userInfo';
import Title from '../ui/Title';
import Swal from 'sweetalert2';

function Profile() {
  const user = useRecoilValue(userInfo);
  
  const setLoginState = useSetRecoilState(loginState);
  const setUserInfo = useSetRecoilState(userInfo);

  const navigate = useNavigate();

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleModal = () => {
  //   console.log(isModalOpen)
  //   setIsModalOpen(true);
  // };
  
  // useEffect(() => {
  //   console.log('useEffect: ', isModalOpen);
  // }, [isModalOpen])

  const handleLogout = () => {
    Swal.fire({
      title: '로그아웃 하시겠습니까?',
      icon: 'warning',
      
      showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
      confirmButtonColor: 'var(--yellow)', // confrim 버튼 색깔 지정
      cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
      confirmButtonText: '확인', // confirm 버튼 텍스트 지정
      cancelButtonText: '취소', // cancel 버튼 텍스트 지정
      
      reverseButtons: true, // 버튼 순서 거꾸로
        
    })
    .then (result => { // 만약 Promise 리턴을 받으면
      if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
        setLoginState(false);
        setUserInfo({
          id: -1,
          name: '',
          email: '',
        });

        navigate('/'); // 메인화면으로 이동
      }
    });

    // let willLogout = window.confirm('로그아웃 하시겠습니까?');
    //   if(willLogout) {
    //     setLoginState(false);
    //     setUserInfo({
    //       id: -1,
    //       name: '',
    //       email: '',
    //     });

    //     navigate('/'); // 메인화면으로 이동
    //   }
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