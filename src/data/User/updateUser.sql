UPDATE [dbo].[pessoa]
SET [eventTitle]=@eventTitle,
    [eventDescription]=@eventDescription,
    [startDate]=@startDate,
    [endDate]=@endDate,
    [avenue]=@avenue,
    [maxMembers]=@maxMembers
WHERE [eventId]=@eventId

SELECT [eventId]
      ,[eventTitle]
      ,[eventDescription]
      ,[startDate]
      ,[endDate]
      ,[avenue]
      ,[maxMembers]
  FROM [dbo].[pessoa]
  WHERE [cpf]=@cpf