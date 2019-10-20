import React from 'react';
import './Satellite.css';

import aimImage from '../../assets/images/aim.gif';
import fastImage from '../../assets/images/fast.gif';
import rhessiImage from '../../assets/images/rhessi.gif';

const satelliteInfo = [
  {
    name: 'ace',
    type: 'Solar research',
    origin: 'Chris Meaney. NASA',
    website: 'http://www.srl.caltech.edu/ACE/',
    mission: 'Advanced Composition Explorer',
    missionDuration : `5 years planned, Elapsed: 22 years, 1 month and 21 days`,
    text: 'Advanced Composition Explorer (ACE) observes particles of solar, interplanetary, interstellar, and galactic origins.'
  },//+
  {
    name: 'aim',
    image: aimImage,
    type: 'Atmospheric research',
    origin: 'Chris Meaney. NASA',
    website: 'http://aim.hamptonu.edu/',
    mission: 'Aeronomy of Ice in the Mesosphere',
    missionDuration : `Elapsed: 12 years, 5 months, 16 days`,
    text: 'AIM is a two-year mission to study Polar Mesospheric Clouds (PMCs), the Earth\'s highest clouds, which form an icy membrane 50 miles (80.4 km) above the surface at the edge of space.'
  },//++
  {
    name: 'fast',
    image: fastImage,
    type: 'Auroral plasma physics',
    origin: 'Matthew Garcia, Brian Kumanchik, NASA/JPL-Caltech',
    website: 'http://sprg.ssl.berkeley.edu/fast/',
    mission: 'Fast Auroral Snapshot Explorer',
    missionDuration : `Planned: 1 year, Final: 12 years, 8 months, 9 days`,
    text: 'This fall, NASA\'s asteroid-hunting spacecraft, OSIRIS-REx, will fly by Earth and use the planet\'s gravitational force to slingshot itself out into space. This maneuver, known as an Earth Gravity Assist, will put OSIRIS-REx on course to visit asteroid Bennu, where it will collect a sample of some of the oldest material in the solar system. The OSIRIS-REx spacecraft makes its closest approach to Earth on Friday, Sept. 22, 2017.'
  },//++
  {
    name: 'geotail',
    type: 'Earth observation',
    origin: 'Chris Meaney. NASA',
    website: 'http://www.stp.isas.jaxa.jp/geotail/',
    mission: 'GeoTail',
    missionDuration : `20 years (planned)`,
    text: 'The GEOTAIL mission is a collaborative project undertaken by the Institute of Space and Astronautical Science (ISAS) and the National Aeronautics and Space Administration (NASA). Its primary objective is to study the dynamics of the Earth\'s magnetotail over a wide range of distance, extending from the near-Earth region (8 Earth radii (Re) from the Earth) to the distant tail (about 200 Re). The GEOTAIL spacecraft was designed and built by ISAS and was launched on July 24, 1992.'
  },//+

  {
    name: 'cluster1',
    type: 'Magnetospheric research',
    origin: 'Chris Meaney. NASA',
    website: 'http://sci.esa.int/cluster',
    mission: 'Cluster',
    missionDuration : `planned: 5 years, elapsed: 19 years, 2 months and 3 days`,
    text: 'Cluster is currently investigating the Earth\'s magnetic environment and its interaction with the solar wind in three dimensions. Science output from Cluster greatly advances our knowledge of space plasma physics, space weather and the Sun-Earth connection and has been key in improving the modeling of the magnetosphere and understanding its various physical processes.'
  },//+
  {
    name: 'cluster2',
    type: 'Magnetospheric research',
    origin: 'Brian Kumanchik, NASA/JPL-Caltech',
    website: 'http://sci.esa.int/cluster',
    mission: 'Cluster',
    missionDuration : `planned: 5 years, elapsed: 19 years, 2 months and 3 days`,
    text: 'Cluster is currently investigating the Earth\'s magnetic environment and its interaction with the solar wind in three dimensions. Science output from Cluster greatly advances our knowledge of space plasma physics, space weather and the Sun-Earth connection and has been key in improving the modeling of the magnetosphere and understanding its various physical processes..'
  },//+
  {
    name: 'cluster3',
    type: 'Magnetospheric research',
    origin: 'Chris Meaney. NASA',
    website: 'http://sci.esa.int/cluster',
    mission: 'Cluster',
    missionDuration : `planned: 5 years, elapsed: 19 years, 2 months and 3 days`,
    text: 'Cluster is currently investigating the Earth\'s magnetic environment and its interaction with the solar wind in three dimensions. Science output from Cluster greatly advances our knowledge of space plasma physics, space weather and the Sun-Earth connection and has been key in improving the modeling of the magnetosphere and understanding its various physical processes.'
  },//+
  {
    name: 'cluster4',
    type: 'Magnetospheric research',
    origin: 'Brian Kumanchik, NASA/JPL-Caltech',
    website: 'http://sci.esa.int/cluster',
    mission: 'Cluster',
    missionDuration : `planned: 5 years, elapsed: 19 years, 2 months and 3 days`,
    text: 'Cluster is currently investigating the Earth\'s magnetic environment and its interaction with the solar wind in three dimensions. Science output from Cluster greatly advances our knowledge of space plasma physics, space weather and the Sun-Earth connection and has been key in improving the modeling of the magnetosphere and understanding its various physical processes..'
  },//+

  {
    name: 'goes14',
    type: 'Weather satellite',
    origin: 'Chris Meaney. NASA',
    mission: 'US National Oceanic and Atmospheric Administration (NOAA)\'s Geostationary Operational Environmental Satellite (GOES) system.',
    missionDuration : `10 years`,
    text: 'GOES satellites provide the kind of continuous monitoring necessary for intensive data analysis. They circle the Earth in a geosynchronous orbit, which means they orbit the equatorial plane of the Earth at a speed matching the Earth\'s rotation. This allows them to hover continuously over one position on the surface. The geosynchronous plane is about 35,800 km (22,300 miles) above the Earth, high enough to allow the satellites a full-disc view of the Earth.'
  },//+
  {
    name: 'goes15',
    type: 'Weather satellite',
    origin: 'Chris Meaney. NASA',
    mission: 'US National Oceanic and Atmospheric Administration (NOAA)\'s Geostationary Operational Environmental Satellite (GOES) system.',
    missionDuration : `10 years (planned), Elapsed: 9 years, 7 months, 4 days`,
    text: 'GOES satellites provide the kind of continuous monitoring necessary for intensive data analysis. They circle the Earth in a geosynchronous orbit, which means they orbit the equatorial plane of the Earth at a speed matching the Earth\'s rotation. This allows them to hover continuously over one position on the surface. The geosynchronous plane is about 35,800 km (22,300 miles) above the Earth, high enough to allow the satellites a full-disc view of the Earth.'
  },//+
  {
    name: 'goes16',
    type: 'Weather satellite',
    website: 'www.goes-r.gov',
    origin: 'Chris Meaney. NASA',
    mission: 'US National Oceanic and Atmospheric Administration (NOAA)\'s Geostationary Operational Environmental Satellite (GOES) system.',
    missionDuration : `Planned: 15 years, Elapsed: 2 years, 10 months, 25 days`,
    text: 'GOES satellites provide the kind of continuous monitoring necessary for intensive data analysis. They circle the Earth in a geosynchronous orbit, which means they orbit the equatorial plane of the Earth at a speed matching the Earth\'s rotation. This allows them to hover continuously over one position on the surface. The geosynchronous plane is about 35,800 km (22,300 miles) above the Earth, high enough to allow the satellites a full-disc view of the Earth.'
  },//+
  {
    name: 'goes17',
    type: 'Weather satellite',
    origin: 'Chris Meaney. NASA',
    website: 'http://goes-r.gov/',
    mission: 'US National Oceanic and Atmospheric Administration (NOAA)\'s Geostationary Operational Environmental Satellite (GOES) system.',
    missionDuration : `Planned: 15 years, Elapsed: 1 year, 7 months, 13 days`,
    text: 'GOES satellites provide the kind of continuous monitoring necessary for intensive data analysis. They circle the Earth in a geosynchronous orbit, which means they orbit the equatorial plane of the Earth at a speed matching the Earth\'s rotation. This allows them to hover continuously over one position on the surface. The geosynchronous plane is about 35,800 km (22,300 miles) above the Earth, high enough to allow the satellites a full-disc view of the Earth.'
  },//+

  {
    name: 'noaa15',
    type: 'Weather satellite',
    origin: 'Lockheed Martin Corporation',
    mission: 'NOAA',
    missionDuration : `2 years`,
    text: 'NOAA-15 (designated NOAA-K before launch) is one of the NASA-provided TIROS series of weather forecasting satellite run by NOAA. It was launched on May 13, 1998, and is currently semi-operational, in a sun-synchronous orbit, 807 km above the Earth, orbiting every 101 minutes. It hosts the AMSU-A and AMSU-B instruments, the AVHRR and High Resolution Infrared Radiation Sounder (HIRS/3) instruments, as well as a Space Environment Monitor (SEM/2). It also hosts Cospas-Sarsat payloads. APT transmission frequency is 137.62 MHz. Due to problems with the S-band transmitter high-gain antennas, NOAA-15 has been configured for High Resolution Picture Transmission using the S-Band Transmitter #2 (1702.5 MHz) omnidirectional antenna.'
  },//+
  {
    name: 'noaa18',
    type: 'Weather satellite',
    origin: 'Lockheed Martin Corporation',
    mission: 'NOAA',
    missionDuration : `2 years`,
    text: 'NOAA-18, known before launch as NOAA-N, is a weather forecasting satellite run by NOAA. NOAA-N (18) was launched on May 20, 2005, into a sun-synchronous orbit at an altitude of 854 km above the Earth, with an orbital period of 102 minutes. It hosts the AMSU-A, MHS, AVHRR, Space Environment Monitor SEM/2 instrument and High Resolution Infrared Radiation Sounder (HIRS) instruments, as well as the SBUV/2 ozone-monitoring instrument. It is the first NOAA POES satellite to use MHS in place of AMSU-B. NOAA-18 also hosts Cospas-Sarsat payloads.'
  },//+
  {
    name: 'noaa19',
    type: 'Weather satellite',
    origin: 'Lockheed Martin Corporation',
    mission: 'NOAA',
    missionDuration : `2 years (planned), Elapsed: 10 years, 8 months, 9 dayss`,
    text: 'On November 4, 2008, NASA announced that the satellite had arrived at Vandenberg aboard a C-5 Galaxy military transport aircraft. Installation of the payload fairing took place January 27, 2009; second stage propellant was loaded on January 31.\n' +
        '\n' +
        'Several attempts were made to conduct the launch. The first attempt was scrubbed after a failure was detected in a launch pad gaseous nitrogen pressurization system. The second attempt was scrubbed after the failure of a payload fairing air conditioning compressor, which is also part of the ground support equipment at the launch pad.\n' +
        '\n' +
        'The satellite was successfully launched at about 2:22 a.m. PST. February 6, 2009 aboard a Delta II flying in the 7320 configuration from Vandenberg Air Force Base.'
  },//+

  {
    name: 'rbspa',
    type: 'Astrophysics',
    origin: 'The Johns Hopkins University Applied Physics Laboratory',
    website: 'http://vanallenprobes.jhuapl.edu/',
    mission: 'Radiation Belt Storm Probes',
    missionDuration : `Planned: 2 years, Elapsed: 7 years, 1 month, 18 days`,
    text: 'The Van Allen Probes, formerly known as the Radiation Belt Storm Probes, are two robotic spacecraft being used to study the Van Allen radiation belts that surround Earth. NASA is conducting the Van Allen Probes mission as part of the Living With a Star program. Understanding the radiation belt environment and its variability has important practical applications in the areas of spacecraft operations, spacecraft system design, mission planning and astronaut safety. The probes were launched on 30 August 2012.'
  },//+
  {
    name: 'rhessi',
    image: rhessiImage,
    type: 'Solar observatory',
    origin: 'Chris Meaney. NASA',
    website: 'https://hesperia.gsfc.nasa.gov/rhessi3/',
    mission: 'HESSI',
    missionDuration : `Planned: 2 years, Final: 16 years, 6 months, 10 days`,
    text: 'The HESSI mission consists of a single spin-stabilized spacecraft in a low-altitude orbit inclined 38 degrees to the Earth\'s equator. The only instrument on board is an imaging spectrometer with the ability to obtain high fidelity color movies of solar flares in X rays and gamma rays. It uses two new complementary technologies: fine grids to modulate the solar radiation, and germanium detectors to measure the energy of each photon very precisely.'
  },//++
  {
    name: 'soho',
    type: 'Solar observation',
    origin: 'William Keeter, DMI/NASA',
    website: 'http://sohowww.nascom.nasa.gov/',
    mission: 'Solar and Heliospheric Observatory',
    missionDuration : `	2 years planned, 23 years, 10 months and 14 days elapsed`,
    text: 'The Solar & Heliospheric Observatory (SOHO) project is a cooperative effort between the European Space Agency (ESA) and NASA. SOHO was designed to study the internal structure of the Sun, its extensive outer atmosphere and the origin of the solar wind, the stream of highly ionized gas that blows continuously outward through the Solar System. SOHO was launched on December 2, 1995. The SOHO spacecraft was built in Europe by an industry team led by Matra, and instruments were provided by European and American scientists. NASA was responsible for the launch and is now responsible for mission operations. Large radio dishes around the world which form NASA\'s Deep Space Network are used to track the spacecraft beyond the Earth\'s orbit. Mission control is based at NASA\'s Goddard Space Flight Center in Maryland. SOHO was meant to operate until 1998, but it was so successful that ESA and NASA decided to prolong its life several times and endorsed several mission extensions.'
  },//++
  {
    name: 'stereoa',
    type: 'Solar observation',
    origin: 'Chris Meaney. NASA',
    website: 'http://stereo.gsfc.nasa.gov/',
    mission: 'Solar Terrestrial RElations Observatory',
    missionDuration : `Planned: 2 years, 12 years, 11 months, 20 days`,
    text: 'STEREO (Solar Terrestrial RElations Observatory) is the third mission in NASA\'s Solar Terrestrial Probes program (STP). The mission, launched in October 2006, has provided a unique and revolutionary view of the Sun-Earth System. The two nearly identical observatories - one ahead of Earth in its orbit, the other trailing behind - have traced the flow of energy and matter from the Sun to Earth. STEREO has revealed the 3D structure of coronal mass ejections; violent eruptions of matter from the sun that can disrupt satellites and power grids, and help us understand why they happen. STEREO is a key addition to the fleet of space weather detection satellites by providing more accurate alerts for the arrival time of Earth-directed solar ejections with its unique side-viewing perspective.'
  },//+
  {
    name: 'stereob',
    type: 'Solar observation',
    origin: 'Chris Meaney. NASA',
    website: 'http://stereo.gsfc.nasa.gov/',
    mission: 'Solar Terrestrial RElations Observatory',
    missionDuration : `Planned: 2 years, 9 years, 10 months, 27 days`,
    text: 'STEREO (Solar Terrestrial RElations Observatory) is the third mission in NASA\'s Solar Terrestrial Probes program (STP). The mission, launched in October 2006, has provided a unique and revolutionary view of the Sun-Earth System. The two nearly identical observatories - one ahead of Earth in its orbit, the other trailing behind - have traced the flow of energy and matter from the Sun to Earth. STEREO has revealed the 3D structure of coronal mass ejections; violent eruptions of matter from the sun that can disrupt satellites and power grids, and help us understand why they happen. STEREO is a key addition to the fleet of space weather detection satellites by providing more accurate alerts for the arrival time of Earth-directed solar ejections with its unique side-viewing perspective.'
  },//+
  {
    name: 'timed',
    type: 'Ionosphere, Atmospheric science, Space weather research.',
    website: 'http://www.timed.jhuapl.edu/WWW/index.php',
    origin: 'The Johns Hopkins University Applied Physics Laboratory',
    mission: 'extended several times, and has now collected data over an entire solar cycle, which helps in its goal to differentiate the Sun\'s effects on the atmosphere from other effects.',
    missionDuration : `2 years (planned), Elapsed: 17 years, 10 months (ongoing)`,
    text: 'The TIMED (Thermosphere Ionosphere Mesosphere Energetics and Dynamics) is an orbiter mission dedicated to study the dynamics of the Mesosphere and Lower Thermosphere (MLT) portion of the Earth\'s atmosphere. The mission was launched from Vandenberg Air Force Base in California on December 7, 2001 aboard a Delta II rocket launch vehicle. The project is sponsored and managed by NASA, while the spacecraft was designed and assembled by the Applied Physics Laboratory at Johns Hopkins University. The mission has been extended several times, and has now collected data over an entire solar cycle, which helps in its goal to differentiate the Sun\'s effects on the atmosphere from other effects.'
  },//+
];

const Satellite = () => {
  return <div className="sattelite">
    <img src={require('../../assets/images/fast.gif')} alt="loading..." /></div>;
};

export default Satellite;
