import sample from '../yumi-last-origin-cyberpunk-pixel-moewalls-com.mp4';

export default function BackGroundVid(){
    return (

<video autoPlay loop muted className="absolute -z-10 w-full h-full bg-cover object-cover">
        <source src={sample}
         type="video/mp4" />Your browser does not support the video tag.
      </video>

    );
}
