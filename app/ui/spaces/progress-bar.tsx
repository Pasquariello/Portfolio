import { ProgressBar } from '@/app/components/progressBar';

export async function CourseProgressBar({
    value,
    complete,
    total,
  }: {
    value: number; // TODO - type this
    complete: number;
    total: number;
  }) {
  
    return (
        <div>
            <div className="flex justify-between mb-4">
                <p>Completed {complete} of {total} Lessons</p>
                <p>{value}%</p>
            </div>
            <ProgressBar variant="violet" value={value} showAnimation={true} />
        </div>
    );
  }