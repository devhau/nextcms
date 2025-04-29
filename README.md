# NextCMS

NextCMS is a powerful content management system (CMS) built on Turborepo, designed to support SEO and multilingual capabilities. It leverages modern technologies to provide a flexible and efficient development experience.

## Features

- **SEO Support**: Optimized for search engines to enhance visibility.
- **Multilingual Support**: Easily manage content in multiple languages.
- **Modern Tech Stack**: Built with:
  - **Next.js**: A React framework for server-side rendering and static site generation.
  - **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
  - **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
  - **Shadcn-UI**: A component library for building beautiful and accessible user interfaces.
  - **Bun**: A modern JavaScript runtime that improves performance for building applications.
  - **Docker**: Containerization technology for easy deployment and scaling.
  - **PostgreSQL**: A powerful open-source relational database system for data management.
  - **Redis**: An in-memory data structure store used for caching and real-time analytics.

## Benefits

- **Easy to Upgrade**: Designed for seamless upgrades and feature expansions.
- **Extensible Architecture**: Easily add new features and functionalities as your project grows.
- **Containerized Environment**: Deploy and manage your application using Docker for consistent environments.

## Getting Started

To get started with NextCMS, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/devhau/nextcms.git
   ```
2. Install dependencies:
   ```bash
   cd nextcms
   bun install
   ```
3. Set up the PostgreSQL database:
   - Create a PostgreSQL database and configure your connection settings in the environment variables.
4. Run the development server:
   ```bash
   bun dev
   ```

### Using Docker

To run NextCMS in a Docker container, follow these steps:

1. Build the Docker image:
   ```bash
   docker build -t nextcms .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 nextcms
   ```

### Using PostgreSQL and Redis

- Make sure you have PostgreSQL and Redis running. You can use Docker to set them up easily:
  ```bash
  docker run --name postgres -e POSTGRES_PASSWORD=yourpassword -d -p 5432:5432 postgres
  docker run --name redis -d -p 6379:6379 redis
  ```

For more detailed documentation, please refer to the [Wiki](#) or check the [Documentation](#).

## Contributing

Contributions are welcome! Please read our [contributing guidelines](#) for more information.
```

Feel free to modify any parts as needed!
