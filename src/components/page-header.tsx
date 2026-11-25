type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="flex flex-col">
      <h1 className="ui-text-header">{title}</h1>
      <p className="ui-text-primary">{description}</p>
    </header>
  );
}
