import Link from 'next/link'
import Image from 'next/image'
import ArrowLeft from 'public/svg/arrow-left.svg'
import DonationForm from "@/components/DonationForm";

export default function Page() {
  return (
    <>
      <div className="ml-8 md:ml-32">
        <div className='flex flex-row gap-x-2'>
          <p className='text-gray-500'>Beranda </p>
          <p className=''>{' > '}</p>
          <p className='text-gray-500'> Donasi</p>
        </div>
        <Link href={'./'} className='flex flex-row text-navy'><Image width={15} src={ArrowLeft} alt='icon-air' className='mt-2 mr-2' />Kembali ke Beranda</Link>
      </div>

      <div className='py-12 text-center'>
        <h1 className='text-3xl md:text-4xl font-bold'>Donasi Sekarang</h1>
        <div className='bg-navy my-8 h-1 w-30 m-auto'></div>
        <p className='mt-8 font-medium text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-sm md:text-lg'>Pilih jenis donasi yang ingin Anda berikan untuk mendukung misi kami dalam mengurangi limbah makanan dan membantu masyarakat yang membutuhkan</p>

      </div>
      <DonationForm />
    </>
  );
}
