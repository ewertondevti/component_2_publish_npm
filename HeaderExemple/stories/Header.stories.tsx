import Header from "../src/Header";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  component: Header,
  title: "Components/Header",
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = ({ ...args }) => <Header {...args} />;

export const Default = Template.bind({});
