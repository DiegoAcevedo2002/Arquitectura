import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import RevistaPost from "@/widgets/Resvista/ResvistaPost";
import { getArticles } from "@/api/Article/article";

export function Home() {
  const [articles, serArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {serArticles(res)}).catch((err) => alert(err));
  }, [])
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/logo_grande.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                ScientiaNexus
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Explora artículos científicos, informes técnicos y actas de congreso de tu interés. También puedes compartir tu opinión sobre los contenidos y autores.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {featuresData.map(({ color, title, icon, description, path }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
                path={path}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
          {articles.map((revista) => 
            <RevistaPost revista={revista} />)}
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;