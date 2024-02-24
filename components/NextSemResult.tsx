'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from './ui/button';
import { Label } from './ui/label';
import { ExternalLink, X } from 'lucide-react';
import { calculateNextSemesterResult } from '@/usis/usisUtils';
import Link from 'next/link';


type Props = {
    currentCGPA:number,
    totalEarnedCredits:number,
}

interface semCourse {
    credit: number;
    gpa: number;
  }

export default function NextSemResult({currentCGPA,totalEarnedCredits}: Props) {

    const [courses, setCourses] = React.useState<semCourse[]>([{ credit: 3, gpa: 4 }]);
    const [CGPAPrediction, setCGPAPrediction] = React.useState(currentCGPA);

    const handleInputChange = (index: number, key: keyof semCourse, value: number) => {
        const updatedCourses:semCourse[] = [...courses];
        updatedCourses[index][key] = value;
        setCourses(updatedCourses);
        setCGPAPrediction(calculateNextSemesterResult(currentCGPA,totalEarnedCredits,courses).nextSemesterCGPA);
        
      };

      const handleAddCourse = () => {
        setCourses([...courses, { credit: 3, gpa: 4 }]);
        setCGPAPrediction(calculateNextSemesterResult(currentCGPA,totalEarnedCredits,courses).nextSemesterCGPA); // You can set initial values as needed
      };
      const handleRemoveCourse = (index: number) => {
        const updatedCourses = [...courses];
        updatedCourses.splice(index, 1);
        setCourses(updatedCourses);
        setCGPAPrediction(calculateNextSemesterResult(currentCGPA,totalEarnedCredits,courses).nextSemesterCGPA);
      };
  return (
    <Card>
    <CardHeader>
      <CardTitle className='flex place-content-between'><div>Calculate Probable CGPA of This Semester</div> <div>{CGPAPrediction || "Error in calculating CGPA"}</div> </CardTitle>
      <CardDescription className='flex justify-end'> <span className=''>Calculated CGPA</span> <Link className='flex self-center text-primary px-2' href={'https://www.bracu.ac.bd/academics/policies-and-procedures'} target='_blank'><ExternalLink size={16} /></Link></CardDescription>
    </CardHeader>
    <CardContent>
    {courses.map((course, index) => (
        <div key={index} className='flex flex-row  gap-1.5'>
            <div className='grid w-full max-w-sm items-center gap-1.5 py-2'>
          <Label htmlFor={`${index}_credit`}>Course {index+1} Credit</Label>
          <Input
          id={`${index}_credit`}
            type="number"
            value={course.credit}
            onChange={(e) => handleInputChange(index, 'credit', parseFloat(e.target.value))}
          />
          </div>
          <div className='grid w-full max-w-sm items-center gap-1.5 py-2'>
          <Label htmlFor={`${index}_GPA`}>Course {index+1} GPA</Label>
          <Input
          id={`${index}_GPA`}
            type="number"
            value={course.gpa}
            onChange={(e) => handleInputChange(index, 'gpa', parseFloat(e.target.value))}
          />
          </div>

          <button className='flex flex-col justify-center items-center' onClick={() => handleRemoveCourse(index)}><X size={15} /></button>
        </div>

      ))}
      
    </CardContent>
    <CardFooter>
    <Button onClick={handleAddCourse}>Add Course</Button>
    </CardFooter>
  </Card>
  
  )
}