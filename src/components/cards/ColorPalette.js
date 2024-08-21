import { useState } from 'react';
import Image from 'next/image'

const ColorPalette = () => {
  const colors = [
    '/chenille-light-grey.jpeg',
    '/Chenille-Black.jpg',
    '/ch-cream.jpg',
    '/ch-teal.jpg',
    '/Chenille-Black.jpg',
    '/Linen-Wheat.jpg',
    '/Linen-Sage.jpg',
    '/Linen-Copper.jpg',
    '/Linen-Teal2.jpg',
    '/Linen-Cream.jpg',
    '/Linen-Barley-Swatch.jpg',
    '/Ascott-Weave-Turquoise.jpg',
    '/Ascot-Weave-Silver-Grey.jpg',
    '/Ascot-Biege.jpg',
    '/Ascott-Weave-Denim.jpg',
    '/Ascot-Weave-Charcoal.jpg',
    '/Ascott-Beige-ottoman-beds.jpg',
    '/Coniston-Armour.jpeg',
    '/Coniston-Velvet-Pink.jpeg',
    '/Coniston-Velvet-Mustard.jpeg',
    '/Coniston-Velvet-Mink.jpg',
    '/Coniston-Velvet-Ivory.jpeg',  
    '/Wool-Teal.jpeg',
    '/Wool-Jade.jpeg',
    '/Wool-Steel.jpeg',
    '/Wool-Chrome.jpeg',
    '/Wool-Truffle.jpeg', 
    '/Plush-Velvet-Ivory.jpeg',
    '/Plush-Velvet-Grey.jpeg',
    '/Plush-Velvet-Sky-Blue.jpeg',
    '/Plush-Velvet-Mustard.jpeg',
    '/Plush-Velvet-Beige.jpeg',    
    '/plush-velvet-silver.jpg',    
    '/Plush-Velvet-black.jpg',    
    '/Plush-Velvet-royal-blue.jpg',    
    '/Plush-Velvet-black.jpg',    
    '/plush-velvet-duck-egg-skyblue.jpg',    
    '/PLUSH-VELVET-LILAC.jpg',    
    '/Plush-Velvet-Ivory.jpeg',  
    '/Plush-Velvet-Bottle-Green.jpg', 
    '/Rustique-Velvet-chocolate.jpeg',    
    '/Rustique-Velvet-Gold.jpeg',    
    '/Rustique-Velvet-slate.jpeg',    
    '/Rustique-Velvet-stone-blue.jpg',    
    '/Rustique-Velvet-turqoise.jpeg',  
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (colorPath) => {
    const colorName = getColorName(colorPath);
    setSelectedColor(colorName);
  };

  const getPrice = () => {
    // Placeholder function for getting price
    return '£25';
  };

  const getColorName = (colorPath) => {
    const fileName = colorPath.substring(colorPath.lastIndexOf('/') + 1);
    const colorName = fileName.split('.')[0].replace(/-/g, ' ');
    return colorName.charAt(0).toUpperCase() + colorName.slice(1);
  };

  const renderColorRow = (rowColors, label) => {
    return (
      <>
        {label && (
          <div className="flex justify-center mt-2 mb-4 w-full">
            <div className="h-[1px] rounded-md bg-black flex items-center justify-center w-full">
              <p className="font-bold text-md bg-[#f1feff] px-3">{label}</p>
            </div>
          </div>
        )}
        <div className="grid grid-cols-6 gap-4 max-md:gap-7 max-md:gap-y-3 max-md:grid-cols-3 w-full">
          {rowColors.map((color, index) => (
            <div key={index} className="flex w-[5.25rem] flex-col items-center">
              <div
                className="rounded-md w-full cursor-pointer transition duration-300 ease-in-out pb-2"
                onClick={() => handleColorClick(color)}
              >
                <Image
                  src={color} 
                  alt={label} 
                  width='100'
                  height='100'
                  className="w-[100%]  h-[5.25rem] object-cover rounded-md"
                />
                <p className="text-center text-[12px] font-semibold text-center my-2">{getColorName(color)} {getPrice()}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-wrap gap-2 w-full">
      <div className="w-full mt-4 text-center">
        <div className="border-black border-[1px] w-[100%] mt-1 mx-auto p-3 cursor-pointer rounded-2xl text-center text-[13px] font-bold">
          {selectedColor ? selectedColor : 'Select a color'}
        </div>
      </div>
      {renderColorRow(colors.slice(0, 5), 'Chenille')}
      {renderColorRow(colors.slice(5, 11), 'Linen')}
      {renderColorRow(colors.slice(11, 17), 'Ascot')}
      {renderColorRow(colors.slice(17, 22), 'Coniston Velvet')}
      {renderColorRow(colors.slice(22, 27), 'Wool')}
      {renderColorRow(colors.slice(27, 33), 'Plush velvet')}
      {/* {renderColorRow(colors.slice(33, 38))}
      {renderColorRow(colors.slice(38, 39))} */}
      {renderColorRow(colors.slice(39, 44), 'Rustique Velvet')}
    </div>
  );
};

export default ColorPalette;
