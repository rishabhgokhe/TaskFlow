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
import DatePicker from "./DatePicker";
import SelectForm from "./SelectForm";

import ArrowDown05Icon from "@/public/svg/icons/ArrowDown05Icon";

const FormSchema = z.object({
  taskTitle: z.string().min(2, {
    message: "Task Title must be at least 2 characters.",
  }),
  description: z.string().optional().default(""),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      taskTitle: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast(
      <>
        <div className="flex flex-col">
          <p>You submitted the following values: </p>
          <pre className="mt-2 max-w-[300px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        </div>
      </>, {
        duration: 3000
      }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-3">
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
                    <Input
                      placeholder="Task Title"
                      className="ring-inset rounded-bl-none rounded-br-none border-b-0"
                      {...field}
                    />
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
                  <Textarea
                    id="description"
                    placeholder="Description"
                    className="resize-none ring-inset rounded-tl-none rounded-tr-none border-dashed"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-between items-center">
          <DatePicker />
          <SelectForm />
          <div className="space-x-2">
            <Button type="button" variant={"destructive"}>
              Cancel
            </Button>
            <Button type="submit">Done</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export const AddTaskInlineModal = () => {
  return <InputForm />;
};
