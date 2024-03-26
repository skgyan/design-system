import { Avatar } from './Avatar';

export default {
  title: 'Design System/Avatar',
  component: Avatar,
};

export const Standard = {
  args: {
    size: 'large',
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554',
  },
};

export const Sizes = {
  args: {
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554',
  },
  render: (args) => (
    <>
      <Avatar {...args} size='large' />
      <Avatar {...args} size='medium' />
      <Avatar {...args} size='small' />
      <Avatar {...args} size='tiny' />
    </>
  ),
};

export const Initials = { 
  render: (args) => (
    <>
      <Avatar username='Saching Tendulkar' />      
      <Avatar username='Virat Koli' />
      <Avatar username='Jaspith Bumrah' />
      <Avatar username='Mohamed Shami' />
    </>
  ),
};

export const Loading = {
  args: {
    loading: true,
  },
  render: (args) => (
    <>
      <Avatar {...args} size='large' />
      <Avatar {...args} size='medium' />
      <Avatar {...args} size='small' />
      <Avatar {...args} size='tiny' />
    </>
  ),
};

export const Large = {
  render: () => (
    <>
      <Avatar loading size='large' />
      <Avatar size='large' username='Tom Coleman' />
      <Avatar
        size='large'
        username='Tom Coleman'
        src='https://avatars2.githubusercontent.com/u/132554'
      />
    </>
  ),
};


export const Controls = {
  args: {
    loading: false,
    size: 'tiny',
    username: 'Sushil Kumar',
    src: 'https://avatars.githubusercontent.com/u/5046860?v=4',
  }
}