const GhostLabel = ({ text }: { text: string }) => {
  return (
    <p className="absolute -inset-y-[30px] -inset-x-[60px] flex text-[150px] font-bold -z-50 opacity-5 font-anton">
      {text}
    </p>
  );
};

export default GhostLabel;
