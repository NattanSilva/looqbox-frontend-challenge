import { SearchOutlined } from '@ant-design/icons'
import type { FormProps } from 'antd'
import { Button, Form, Input } from 'antd'

type FieldType = {
  name: string
}

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

export function SearchBar() {
  return (
    <Form
      name='basic'
      style={{ width: '100%' }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
      className='flex! justify-between! items-center!'
    >
      <Form.Item<FieldType>
        name='name'
        rules={[{ required: true, message: 'Please input pokemon name!' }]}
        className='w-[89%]!'
      >
        <Input placeholder='Pokemon name...' />
      </Form.Item>

      <Form.Item label={null} className='w-1/10!'>
        <Button type='primary' htmlType='submit' icon={<SearchOutlined />} />
      </Form.Item>
    </Form>
  )
}
