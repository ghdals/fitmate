import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/auth-layout';
import { Button } from '../components/button';
import { Field, Label } from '../components/fieldset';
import { Input } from '../components/input';
import { Heading } from '../components/heading';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 임시 로그인 처리
    dispatch(login({ email: 'test@example.com', name: '홍길동' }));
    navigate('/library');
  };

  return (
    <AuthLayout>
      <form onSubmit={handleLogin} className="grid w-full max-w-sm grid-cols-1 gap-6">
        <Heading>로그인</Heading>
        <Field>
          <Label>Email</Label>
          <Input type="email" name="email" required />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input type="password" name="password" required />
        </Field>
        <Button type="submit" className="w-full">로그인</Button>
      </form>
    </AuthLayout>
  );
}

export default LoginPage;
