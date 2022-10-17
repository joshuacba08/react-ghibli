import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Item = ({film}) => {
  return (
    <Card className="w-80">
    <CardHeader color="blue" className="relative h-56">
      <img
        src={film.image}
        alt="img-blur-shadow"
        className="h-full w-full object-cover"
      />
    </CardHeader>
    <CardBody className="text-center">
      <Typography variant="h5" className="mb-2">
        <Link to={`/detail/${film.id}`}>
            {film.title}
        </Link>
        
      </Typography>
      <Typography className="line-clamp-4">
        {film.description}
      </Typography>
    </CardBody>
    <CardFooter divider className="flex items-center justify-between py-3">
      <Typography variant="small">$899/night</Typography>
      <Typography variant="small" color="gray" className="flex gap-1">
        <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
        Barcelona, Spain
      </Typography>
    </CardFooter>
  </Card>
  )
}

export default Item