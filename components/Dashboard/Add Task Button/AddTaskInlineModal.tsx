"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { listNames } from "@/lib/Data";

import ArrowDown05Icon from "@/public/svg/icons/ArrowDown05Icon";
import CalendarUpload01Icon from "@/public/svg/icons/CalendarUpload01Icon";

const FormSchema = z.object({
  taskTitle: z.string().min(2, { message: "Task Title must be at least 2 characters." }),
  description: z.string().optional().default(""),
  dueDate: z.date(),
  list: z.string().default(""),
});

type AddTaskInlineModalProps = {
  handleCloseModal: React.MouseEventHandler<HTMLButtonElement>;
}

export function AddTaskInlineModal({handleCloseModal} : AddTaskInlineModalProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      taskTitle: "",
      description: "",
      dueDate: undefined,
      list: "Default",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast(
      <div className="flex flex-col">
        <p>You submitted the following values:</p>
        <pre className="mt-2 max-w-[300px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>,
      { duration: 3000 }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full sm:w-2/3 space-y-3">
      <div>
        <FormField
            control={form.control}
            name="taskTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center text-sky-600 ml-1">
                    New Task Details
                    <ArrowDown05Icon />
                  </div>
                </FormLabel>
                <div>
                  <FormControl>
                    <Input placeholder="Task Title" className="ring-inset rounded-bl-none rounded-br-none border-b-0" {...field} />
                  </FormControl>
                  <FormMessage className="border- border-b-0 pl-2" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Description" className="resize-none ring-inset rounded-tl-none rounded-tr-none border-dashed" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
      </div>

        <div className="flex flex-col sm:flex-row w-full justify-between gap-2">
          {/* // DatePicker  */}
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn("min-w-[150px] pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarUpload01Icon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date(new Date().getTime() - 24 * 60 * 60 * 1000)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

          {/* // Custom List select form */}
          <FormField
            control={form.control}
            name="list"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="ring-inset lg:min-w-[220px] lg:max-w-full xl:min-w-[300px]">
                      <SelectValue placeholder="Select a List" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {listNames.map((item, id) => (
                      <SelectItem key={id} value={item.name}>{item.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <div className="flex space-x-2">
            <Button onClick={handleCloseModal} type="button" variant="destructive">Cancel</Button>
            <Button type="submit">Done</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
