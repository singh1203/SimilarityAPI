# Similarity API App

This is a learning project built with Next.js 13 and TypeScript, designed to understand TypeScript, Next.js source-based structuring, and React component-based pages and layouts. The application uses a similarity API to compare different inputs and return their similarity score.

## Features

- **Rate Limited API routes**: Protect your API from excessive requests.
- **Protection of sensitive routes**: Secure your application's sensitive information.
- **Google authentication**: Authenticate users via Google.
- **Typescript**: Ensure type safety and improve developer tooling.
- **API key system**: Create and revoke user keys for API access.
- **Radix UI Primitives**: Utilize a low-level UI component library.
- **Tailwind CSS**: Style your app with a utility-first CSS framework.
- **Fonts with next/font**: Optimize web fonts with Next.js.
- **Icons from Lucide**: Enhance your UI with open-source icons.
- **Dark mode with next-themes**: Implement dark mode with ease.
- **Class merging with tailwind-merge**: Combine Tailwind CSS classes.
- **Animation with tailwindcss-animate**: Animate elements with Tailwind CSS.
- **Conditional classes with clsx**: Conditionally apply CSS classes.
- **Variants with class-variance-authority**: Manage variant classes in your application.

## Technologies Used

- **Next.js 13**
- **TypeScript**
- **React**

## Getting Started

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Step up .env file using .evn.example file and add your own credentials.
5. **Setup Database**
    You can go to [neon.tech](https://neon.tech) to get a free postgres instance.Now run

    ```bash
    npx prisma generate
    npx prisma db push
    ```

## Learning Outcomes

- Setting up a Next.js project with TypeScript
- Understanding source-based structure in a Next.js project
- Creating and using React components for pages and layouts
- Working with APIs in a Next.js context

## License

This project is open source and available under the [MIT License](LICENSE).